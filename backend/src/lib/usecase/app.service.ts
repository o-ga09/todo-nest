import { Inject, Injectable } from '@nestjs/common';
import { InputPort } from './port/InputPort';
import { RequestParam, ResponseStatus, Task, TaskId } from '../domain/entity';

export const INPUTPORT = 'inputport';
@Injectable()
export class Usecase {
  constructor(
    @Inject(INPUTPORT)
    private readonly inputport: InputPort,
  ) {}

  getHello(): string {
    return 'OK';
  }

  async getAll(): Promise<Task[]> {
    const tasks = await this.inputport.getAll();
    return tasks;
  }

  async getById(id: number): Promise<Task> {
    const taskId = new TaskId(id);
    const task = await this.inputport.getById(taskId);
    return task;
  }

  async createTask(reqesttask: RequestParam): Promise<ResponseStatus> {
    const status = await this.inputport.createTask(reqesttask);
    return status;
  }

  async updatedTask(
    id: number,
    requesttask: RequestParam,
  ): Promise<ResponseStatus> {
    const taskId = new TaskId(id);
    const status = await this.inputport.updateTask(taskId, requesttask);
    return status;
  }

  async deleteTask(id: number): Promise<ResponseStatus> {
    const taskId = new TaskId(id);
    const status = await this.inputport.deleteTask(taskId);
    return status;
  }
}
