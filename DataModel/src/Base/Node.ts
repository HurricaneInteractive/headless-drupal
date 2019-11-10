import DrupalAPI from "./Api";

interface DrupalNode<T> {
  nodeName: string;
  readonly api: DrupalAPI;
  getAll(): T[];
}

export default DrupalNode
