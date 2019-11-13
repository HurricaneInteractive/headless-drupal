import DrupalAPI from "./Api";

/**
 * Base Node interface. Defines all the required attributes/methods
 * to define when registering a Node
 *
 * @interface DrupalNode
 * @template T - Data structure that will be returned when fetching or creating
 */
interface DrupalNode<T> {
  nodeName: string;
  readonly api: DrupalAPI;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  transformFetchData(data: any): T;
}

export default DrupalNode
