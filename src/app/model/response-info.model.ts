export interface ResponseInfo {
  get: string;
  parameters: Object;
  errors: Object;
  results: number;
  paging: {
    current: number;
    total: number;
  };
}
