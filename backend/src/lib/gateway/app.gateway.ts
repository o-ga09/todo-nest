/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Task, TaskId, RequestParam, ResponseStatus } from '../domain/entity';
import { InputPort } from '../usecase/port/InputPort';

@Injectable()
export class AppGateway implements InputPort {
  getAll(): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: TaskId): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  createTask(param: RequestParam): Promise<ResponseStatus> {
    throw new Error('Method not implemented.');
  }
  updateTask(id: TaskId, param: RequestParam): Promise<ResponseStatus> {
    throw new Error('Method not implemented.');
  }
  deleteTask(id: TaskId): Promise<ResponseStatus> {
    throw new Error('Method not implemented.');
  }
}
