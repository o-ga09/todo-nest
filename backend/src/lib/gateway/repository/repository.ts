export interface IRepository {
  getAll(): Promise<DriverTask[]>;
  getById(id: number): Promise<DriverTask>;
  Create(task: RequestDriverTask): Promise<DriverResponse>;
  Update(id: number, task: RequestDriverTask): Promise<DriverResponse>;
  Delete(id: number): Promise<DriverResponse>;
}

export class DriverTask {
  constructor(
    readonly id: number,
    readonly taskName: string,
    readonly taskDesc: string,
    readonly taskStatus: number,
    readonly creadted_at: Date,
    readonly updated_at: Date,
  ) {}
}

export class DriverResponse {
  constructor(
    readonly status: string,
    readonly code: number,
  ) {}
}

export class RequestDriverTask {
  constructor(
    readonly taskName: string,
    readonly taskDesc: string,
    readonly taskStatus: number,
    readonly creadted_at: Date,
    readonly updated_at: Date,
  ) {}
}
