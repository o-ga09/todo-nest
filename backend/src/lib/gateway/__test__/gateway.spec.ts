import {
  RequestParam,
  ResponseStatus,
  Task,
  TaskId,
} from '../../domain/entity';
import { Gateway } from '../app.gateway';
import {
  DriverResponse,
  DriverTask,
  Repository,
} from '../repository/repository';

describe('Gateway', () => {
  test('タスクの一覧を取得する', async () => {
    const taskDriver = {} as Repository;
    const getAllMock = jest.fn();
    taskDriver.getAll = getAllMock;
    getAllMock.mockResolvedValueOnce([]);

    const gateway = new Gateway(taskDriver);
    const expected = await gateway.getAll();
    const actual: Task[] = [];
    expect(actual).toEqual(expected);
  });
});

describe('タスクをIdで取得する', () => {
  test('任意の１つのタスクが返ること', async () => {
    const taskDriver = {} as Repository;
    const getByIdMock = jest.fn();
    taskDriver.getById = getByIdMock;

    const mockDate = new Date(2023, 9, 18, 1, 2, 3);
    const mockResult = new DriverTask(1, 'test', 'hoge', 1, mockDate, mockDate);
    getByIdMock.mockResolvedValueOnce(mockResult);

    const task = new Task(1, 'test', 'hoge', 1, mockDate, mockDate);
    const gateway = new Gateway(taskDriver);
    const taskId = new TaskId(1);
    const expected = await gateway.getById(taskId);
    expect(task).toEqual(expected);
  });
});

describe('タスクを作成する', () => {
  test('正常系 - 任意の１つのタスクが作成してOKが返ること', async () => {
    const taskDriver = {} as Repository;
    const createTaskMock = jest.fn();
    taskDriver.Create = createTaskMock;

    const mockResult = new DriverResponse('created', 200);
    createTaskMock.mockResolvedValueOnce(mockResult);

    const mockCreatedAt = new Date(2023, 9, 2, 0, 0);
    const mockUpdatedAt = new Date(2023, 9, 2, 0, 0);

    const task = new RequestParam(
      'test',
      'hoge',
      1,
      mockCreatedAt,
      mockUpdatedAt,
    );
    const response = new ResponseStatus('created', 200);
    const gateway = new Gateway(taskDriver);
    const expected = await gateway.createTask(task);
    expect(response).toEqual(expected);
  });
});

describe('タスクを編集する', () => {
  test('正常系 - 任意の１つのタスクが作成してOKが返ること', async () => {
    const taskDriver = {} as Repository;
    const updateTaskMock = jest.fn();
    taskDriver.Update = updateTaskMock;

    const mockResult = new ResponseStatus('updated', 200);
    updateTaskMock.mockResolvedValueOnce(mockResult);

    const mockCreatedAt = new Date(2023, 9, 2, 0, 0);
    const mockUpdatedAt = new Date(2023, 9, 2, 0, 0);

    const task = new RequestParam(
      'test',
      'hoge',
      1,
      mockCreatedAt,
      mockUpdatedAt,
    );
    const response = new ResponseStatus('updated', 200);
    const gateway = new Gateway(taskDriver);
    const taskId = new TaskId(1);
    const expected = await gateway.updateTask(taskId, task);
    expect(response).toEqual(expected);
  });
});

describe('タスクを削除する', () => {
  test('正常系 - 任意の１つのタスクが削除してOKが返ること', async () => {
    const taskDriver = {} as Repository;
    const deleteTaskMock = jest.fn();
    taskDriver.Delete = deleteTaskMock;

    const mockResult = new DriverResponse('deleted', 200);
    deleteTaskMock.mockResolvedValueOnce(mockResult);

    const response = new ResponseStatus('deleted', 200);
    const gateway = new Gateway(taskDriver);
    const taskId = new TaskId(1);
    const expected = await gateway.deleteTask(taskId);
    expect(response).toEqual(expected);
  });
});
