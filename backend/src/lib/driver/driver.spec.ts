describe('sample test', () => {
  test('add test', () => {
    expect(add(1, 1)).toBe(2);
  });
});

function add(arg0: number, arg1: number): number {
  return arg0 + arg1;
}

// import { DriverTask } from '../gateway/repository/repository';
// import { Task } from './dao/dao.entity';
// import { dao } from './dao/db';
// import { RepositoryImpl } from './driver';

// describe('driver', () => {
//   test('dbからタスクの一覧を取得する', async () => {
//     const datasource = new dao();
//     const conn = await datasource.initdb();
//     const repo = conn.getRepository(Task);
//     const driverTaskService = new RepositoryImpl(repo);

//     const expected: DriverTask[] = [];
//     const actual = await driverTaskService.getAll();
//     expect(actual).toEqual(expected);
//   });
// });
