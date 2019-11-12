import DrupalAPI from "./Api";

interface DrupalNode<T> {
  nodeName: string;
  readonly api: DrupalAPI;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  transformFetchData(data: any): T;
}

export default DrupalNode
