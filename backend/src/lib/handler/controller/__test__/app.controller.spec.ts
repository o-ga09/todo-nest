import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { INPUTPORT, Usecase } from '../../../usecase/app.service';
import { Gateway, REPOSITORY } from '../../../gateway/app.gateway';
import { RepositoryImpl } from '../../../driver/driver';

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
          useClass: Gateway,
        },
        {
          provide: REPOSITORY,
          useClass: RepositoryImpl,
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
