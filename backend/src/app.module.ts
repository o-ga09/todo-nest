import { Module } from '@nestjs/common';
import { AppController } from './lib/handler/controller/app.controller';
import { INPUTPORT, Usecase } from './lib/usecase/app.service';
import { Gateway, REPOSITORY } from './lib/gateway/app.gateway';
import { RepositoryImpl } from './lib/driver/driver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'usecase',
      useClass: Usecase,
    },
    {
      provide: INPUTPORT,
      useClass: Gateway,
    },
    {
      provide: REPOSITORY,
      useClass: RepositoryImpl,
    },
  ],
})
export class AppModule {}
