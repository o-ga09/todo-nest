import { DataSource } from 'typeorm';

export class dao {
  readonly datasource: DataSource;
  constructor() {
    console.log(process.env.HOST);
    console.log(process.env.PORT);
    this.datasource = new DataSource({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: ['./*.entity.ts'],
      synchronize: true,
    });
  }

  async initdb(): Promise<DataSource> {
    return await this.datasource.initialize();
  }
}
