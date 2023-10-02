import { RequestParam, ResponseStatus, Task } from '../../domain/entity';
import { Usecase } from '../app.service';
import { InputPort } from '../port/InputPort';

describe('Usecase test', () => {
  test('タスク一覧を取得する', async () => {
    const inputPort = {} as InputPort;
    const getAllMock = jest.fn();
    inputPort.getAll = getAllMock;
    getAllMock.mockResolvedValueOnce([]);

    const usecase = new Usecase(inputPort);
    const expected = await usecase.getAll();
    const actual: Task[] = [];
    expect(actual).toEqual(expected);
  });
});

describe('タスクをIdで取得する', () => {
  test('正常系 - 任意の１つのタスクが返ること', async () => {
    const inputPort = {} as InputPort;
    const getByIdMock = jest.fn();
    inputPort.getById = getByIdMock;

    const mockDate = new Date(2023, 9, 18, 1, 2, 3);
    const mockResult = new Task(1, 'test', 'hoge', 1, mockDate, mockDate);
    getByIdMock.mockResolvedValueOnce(mockResult);

    const usecase = new Usecase(inputPort);
    const expected = await usecase.getById(1);
    expect(mockResult).toEqual(expected);
  });
});

describe('タスクを作成する', () => {
  test('正常系 - 任意の１つのタスクが作成してOKが返ること', async () => {
    const inputPort = {} as InputPort;
    const createTaskMock = jest.fn();
    inputPort.createTask = createTaskMock;
    const mockResult = new ResponseStatus('Created', 200);
    createTaskMock.mockResolvedValueOnce(mockResult);

    const mockCreatedAt = new Date(2023, 9, 2, 0, 0);
    const mockUpdatedAt = new Date(2023, 9, 2, 0, 0);

    const usecase = new Usecase(inputPort);
    const arg = new RequestParam(
      'test',
      'hoge',
      0,
      mockCreatedAt,
      mockUpdatedAt,
    );
    const expected = await usecase.createTask(arg);
    expect(mockResult).toEqual(expected);
  });
});

describe('タスクを編集する', () => {
  test('正常系 - 任意の１つのタスクが編集してOKが返ること', async () => {
    const inputPort = {} as InputPort;
    const updateTaskMock = jest.fn();
    inputPort.updateTask = updateTaskMock;
    const mockResult = new ResponseStatus('Updated', 200);
    updateTaskMock.mockResolvedValueOnce(mockResult);

    const mockCreatedAt = new Date(2023, 9, 2, 0, 0);
    const mockUpdatedAt = new Date(2023, 9, 2, 0, 0);

    const usecase = new Usecase(inputPort);
    const arg = new RequestParam(
      'test',
      'hoge',
      0,
      mockCreatedAt,
      mockUpdatedAt,
    );
    const expected = await usecase.updatedTask(1, arg);
    expect(mockResult).toEqual(expected);
  });
});

describe('タスクを削除する', () => {
  test('正常系 - 任意の１つのタスクが削除してOKが返ること', async () => {
    const inputPort = {} as InputPort;
    const deleteTaskMock = jest.fn();
    inputPort.deleteTask = deleteTaskMock;
    const mockResult = new ResponseStatus('Deleted', 200);
    deleteTaskMock.mockResolvedValueOnce(mockResult);

    const usecase = new Usecase(inputPort);
    const expected = await usecase.deleteTask(1);
    expect(mockResult).toEqual(expected);
  });
});
