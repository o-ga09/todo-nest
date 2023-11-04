import { DataSource } from 'typeorm';

export class dao {
  readonly datasource: DataSource;
  constructor() {
    this.datasource = new DataSource({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'todo',
      entities: ['src/lib/driver/dao/**/*.ts'],
      synchronize: true,
      logging: true,
    });
  }

  async initdb(): Promise<DataSource> {
    return await this.datasource.initialize();
  }
}
