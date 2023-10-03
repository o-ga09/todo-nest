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
    const res = await this.repository.find();
    const tasks = res.map((task) => {
      return new DriverTask(
        task.id,
        task.name,
        task.description,
        task.status,
        new Date(),
        new Date(),
      );
    });
    return tasks;
  }
  getById(id: number): Promise<DriverTask> {
    throw new Error(`Method not implemented.${id}`);
  }
  Create(task: DriverTask): Promise<DriverResponse> {
    throw new Error(`Method not implemented.${task}`);
  }
  Update(id: number, task: DriverTask): Promise<DriverResponse> {
    throw new Error(`Method not implemented.${id},${task}`);
  }
  Delete(id: number): Promise<DriverResponse> {
    throw new Error(`Method not implemented.${id}`);
  }
}
