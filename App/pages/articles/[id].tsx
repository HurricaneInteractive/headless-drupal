import React from 'react'

import { Article } from "../../DataModel"
import ArticleData from '../../DataModel/Article/ArticleData'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'

interface SingleArticleProps {
  article: ArticleData
}

const SingleArticle: NextPage<SingleArticleProps> = ({ article }) => {
  return (
    <div>
      <Link href="/" passHref><a>Home</a></Link>

      <h2>{article.attributes.title}</h2>
    </div>
  )
}

SingleArticle.getInitialProps = async ({ query }: NextPageContext) => {
  const id = typeof query.id === "string" ? query.id : query.id[0]
  const article: ArticleData = await new Article().getById(id);

  return {
    article
  }
}

export default SingleArticle
