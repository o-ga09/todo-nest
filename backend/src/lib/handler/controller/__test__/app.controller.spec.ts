import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { INPUTPORT, Usecase } from '../../../usecase/app.service';
import { AppGateway } from '../../../gateway/app.gateway';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
