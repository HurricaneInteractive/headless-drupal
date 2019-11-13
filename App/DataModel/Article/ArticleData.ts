/**
 * Article node data structure
 *
 * @interface ArticleData
 */
interface ArticleData {
  type: string;
  id: string;
  attributes: {
    title: string
  }
}

export default ArticleData
