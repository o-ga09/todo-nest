import { Repository } from 'typeorm';
import {
  DriverResponse,
  DriverTask,
  IRepository,
} from '../gateway/repository/repository';
import { Task } from './dao/dao.entity';

export class RepositoryImpl implements IRepository {
  constructor(readonly repository: Repository<Task>) {}
  async getAll(): Promise<DriverTask[]> {
    // const res = await this.repository.find();
    const res = [new DriverTask(1, 'hoge', 'fuga', 1, new Date(), new Date())];
    const tasks = res.map((task) => {
      return new DriverTask(
        task.id,
        task.taskName,
        task.taskDesc,
        task.taskStatus,
        new Date(),
        new Date(),
      );
    });
    return tasks;
  }
  async getById(id: number): Promise<DriverTask> {
    const res = new DriverTask(id, 'hoge', 'fuga', 1, new Date(), new Date());
    return res;
  }
  async Create(task: DriverTask): Promise<DriverResponse> {
    const res = new DriverResponse('OK', task.id);
    return res;
  }
  async Update(id: number, task: DriverTask): Promise<DriverResponse> {
    const res = new DriverResponse('OK', id);
    console.log(task);
    return res;
  }
  async Delete(id: number): Promise<DriverResponse> {
    const res = new DriverResponse('OK', id);
    return res;
  }
}
