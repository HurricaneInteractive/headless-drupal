import DrupalNode from "../Base/Node"
import ArticleData from "./ArticleData"
import DrupalAPI from "../Base/Api"

class Article implements DrupalNode<ArticleData> {
  public nodeName: string = "article"
  readonly api: DrupalAPI = new DrupalAPI();

  public getAll = (): ArticleData[] => {
    this.api.getNode(this.nodeName);
    return [
      {
        type: "",
        id: "",
        attributes: {
          title: ""
        }
      }
    ]
  }
}

export default Article
