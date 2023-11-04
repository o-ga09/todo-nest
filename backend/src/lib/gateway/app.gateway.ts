/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { Task, TaskId, RequestParam, ResponseStatus } from '../domain/entity';
import { InputPort } from '../usecase/port/InputPort';
import { IRepository, RequestDriverTask } from './repository/repository';

export const REPOSITORY = 'repository';

@Injectable()
export class Gateway implements InputPort {
  constructor(
    @Inject(REPOSITORY)
    readonly repository: IRepository,
  ) {}

  async getAll(): Promise<Task[]> {
    const res = await this.repository.getAll();
    const tasks = res.map((task) => {
      return new Task(
        task.id,
        task.taskName,
        task.taskDesc,
        task.taskStatus,
        task.creadted_at,
        task.updated_at,
      );
    });
    return tasks;
  }
  async getById(id: TaskId): Promise<Task> {
    const taskId = id.Value;
    const res = await this.repository.getById(taskId);
    const task = new Task(
      res.id,
      res.taskName,
      res.taskDesc,
      res.taskStatus,
      res.creadted_at,
      res.updated_at,
    );
    return task;
  }
  async createTask(param: RequestParam): Promise<ResponseStatus> {
    const task = new RequestDriverTask(
      param.taskName,
      param.taskDesc,
      param.taskStatus,
      param.taskCreatedAt,
      param.taskUpdatedAt,
    );
    const res = await this.repository.Create(task);
    const status = new ResponseStatus(res.status, res.code);
    return status;
  }
  async updateTask(id: TaskId, param: RequestParam): Promise<ResponseStatus> {
    const taskId = id.Value;
    const task = new RequestDriverTask(
      param.taskName,
      param.taskDesc,
      param.taskStatus,
      param.taskCreatedAt,
      param.taskUpdatedAt,
    );
    const res = await this.repository.Update(taskId, task);
    const status = new ResponseStatus(res.status, res.code);
    return status;
  }
  async deleteTask(id: TaskId): Promise<ResponseStatus> {
    const taskId = id.Value;
    const res = await this.repository.Delete(taskId);
    const status = new ResponseStatus(res.status, res.code);
    return status;
  }
}
