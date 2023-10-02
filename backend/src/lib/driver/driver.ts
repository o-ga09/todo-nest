import {
  DriverResponse,
  DriverTask,
  Repository,
} from '../gateway/repository/repository';

export class RepositoryImpl implements Repository {
  getAll(): Promise<DriverTask[]> {
    throw new Error(`Method not implemented.`);
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
