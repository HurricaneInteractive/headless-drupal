import DrupalNode from "../Base/Node"
import ArticleData from "./ArticleData"
import DrupalAPI from "../Base/Api"

class Article implements DrupalNode<ArticleData> {
  public nodeName: string = "article"
  readonly api: DrupalAPI = new DrupalAPI();

  public transformFetchData = (data: any): ArticleData => {
    return {
      type: data.type,
      id: data.id,
      attributes: {
        title: data.attributes.title
      }
    }
  }

  public getAll = async (): Promise<ArticleData[]> => {
    const { data } = await this.api.getNode(this.nodeName);
    return data.map((d: any): ArticleData => this.transformFetchData(d))
  }

  public getById = async (id: string): Promise<ArticleData> => {
    const data = await this.api.getNode(this.nodeName, id);
    return this.transformFetchData(data.data)
  }
}

export default Article
