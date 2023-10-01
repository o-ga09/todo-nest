import { Module } from '@nestjs/common';
import { AppController } from './lib/handler/controller/app.controller';
import { INPUTPORT, Usecase } from './lib/usecase/app.service';
import { AppGateway } from './lib/gateway/app.gateway';

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
      useClass: AppGateway,
    },
  ],
})
export class AppModule {}
