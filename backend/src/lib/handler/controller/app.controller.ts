import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usecase } from '../../usecase/app.service';
import { ViewRequestParam } from './model/view';
import { RequestParam } from 'src/lib/domain/entity';

@Controller()
@Injectable()
export class AppController {
  constructor(
    @Inject('usecase')
    private readonly appService: Usecase,
  ) {}

  @Get('health')
  HealthCheck(): string {
    return this.appService.getHello();
  }

  @Get('todo')
  async getAll(): Promise<string> {
    const res = await this.appService.getAll();
    return JSON.stringify(res);
  }

  @Get('todo/:id')
  async getById(@Param('id') id: string): Promise<string> {
    const res = await this.appService.getById(Number(id));
    return JSON.stringify(res);
  }

  @Post('todo')
  async create(@Body() body: ViewRequestParam): Promise<string> {
    const param = new RequestParam(
      body.taskName,
      body.taskDesc,
      body.taskStatus,
      new Date(body.taskCreatedAt),
      new Date(body.taskUpdatedAt),
    );
    const res = await this.appService.createTask(param);
    return JSON.stringify(res);
  }

  @Put('todo/:id')
  async update(
    @Param('id') id: string,
    @Body() body: ViewRequestParam,
  ): Promise<string> {
    const param = new RequestParam(
      body.taskName,
      body.taskDesc,
      body.taskStatus,
      new Date(body.taskCreatedAt),
      new Date(body.taskUpdatedAt),
    );
    const res = await this.appService.updatedTask(Number(id), param);
    return JSON.stringify(res);
  }

  @Delete('todo/:id')
  async delete(@Param('id') id: string): Promise<string> {
    const res = await this.appService.deleteTask(Number(id));
    return JSON.stringify(res);
  }
}
