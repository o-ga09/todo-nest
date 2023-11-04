export class ViewResponseStatus {
  readonly status: string;
  readonly code: number;

  constructor(status: string, code: number) {
    this.status = status;
    this.code = code;
  }
}

export class ViewRequestParam {
  constructor(
    readonly taskName: string,
    readonly taskDesc: string,
    readonly taskStatus: number,
    readonly taskCreatedAt: string,
    readonly taskUpdatedAt: string,
  ) {}
}
