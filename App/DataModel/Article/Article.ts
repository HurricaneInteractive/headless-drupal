import DrupalNode from "../Base/Node"
import ArticleData from "./ArticleData"
import DrupalAPI from "../Base/Api"

/**
 * Node implementation for a Article node
 *
 * @class Article
 * @implements {DrupalNode<ArticleData>}
 */
class Article implements DrupalNode<ArticleData> {
  /**
   * Defines the article nodename, this should match drupals name
   *
   * @type {string}
   * @memberof Article
   */
  public nodeName: string = "article"

  /**
   * DrupalAPI interface
   *
   * @type {DrupalAPI}
   * @memberof Article
   */
  readonly api: DrupalAPI = new DrupalAPI();

  /**
   * Transform the fetch data to represent the Node ArticleData
   *
   * @param {any} data - Returned fetch data
   * @returns {ArticleData}
   * @memberof Article
   */
  public transformFetchData = (data: any): ArticleData => {
    return {
      type: data.type,
      id: data.id,
      attributes: {
        title: data.attributes.title
      }
    }
  }

  /**
   * Gets all the article nodes
   *
   * @returns {Promise<ArticleData[]>}
   * @async
   * @memberof Article
   */
  public getAll = async (): Promise<ArticleData[]> => {
    const { data } = await this.api.getNode(this.nodeName);
    return data.map((d: any): ArticleData => this.transformFetchData(d))
  }

  /**
   * Gets a single article node
   *
   * @param {string} id - Drupal node id
   * @returns {Promise<ArticleData>}
   * @async
   * @memberof Article
   */
  public getById = async (id: string): Promise<ArticleData> => {
    const { data } = await this.api.getNode(this.nodeName, id);
    return this.transformFetchData(data)
  }
}

export default Article
