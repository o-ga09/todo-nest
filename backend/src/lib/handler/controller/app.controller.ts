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
  async create(@Body() body: RequestParam): Promise<string> {
    const res = await this.appService.createTask(body);
    return JSON.stringify(res);
  }

  @Put('todo/:id')
  async update(
    @Param('id') id: string,
    @Body() body: RequestParam,
  ): Promise<string> {
    const res = await this.appService.updatedTask(Number(id), body);
    return JSON.stringify(res);
  }

  @Delete('todo/:id')
  async delete(@Param('id') id: string): Promise<string> {
    const res = await this.appService.deleteTask(Number(id));
    return JSON.stringify(res);
  }
}
