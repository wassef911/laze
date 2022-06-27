export interface IMain {
  host: string;
  beforeAll: string;
  prefix?: string;
  registed: string[];
}

export interface ISuite {
  model_enpoint: string;
  beforeAll?: string;
  cases: ICase[]
}

export enum HTTP_VERBES {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

export interface ICase {
  verbe: HTTP_VERBES,
  description?: string;
  example?: string;
  in?: string;
  out?: string;
  status: number;
  ignore_keys: string[];
}
