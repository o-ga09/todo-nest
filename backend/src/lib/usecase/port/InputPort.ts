import {
  RequestParam,
  ResponseStatus,
  Task,
  TaskId,
} from 'src/lib/domain/entity';

export interface InputPort {
  getAll(): Promise<Task[]>;
  // eslint-disable-next-line no-unused-vars
  getById(id: TaskId): Promise<Task>;
  // eslint-disable-next-line no-unused-vars
  createTask(param: RequestParam): Promise<ResponseStatus>;
  // eslint-disable-next-line no-unused-vars
  updateTask(id: TaskId, param: RequestParam): Promise<ResponseStatus>;
  // eslint-disable-next-line no-unused-vars
  deleteTask(id: TaskId): Promise<ResponseStatus>;
}
