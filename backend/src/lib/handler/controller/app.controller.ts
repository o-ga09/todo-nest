import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../../usecase/app.service';

@Controller()
@Injectable()
export class AppController {
  constructor(
    @Inject('usecase')
    private readonly appService: Usecase,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
