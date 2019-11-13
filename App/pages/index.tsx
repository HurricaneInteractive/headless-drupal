import React from 'react'

import { Article } from "../DataModel"
import ArticleData from '../DataModel/Article/ArticleData'
import { NextPage } from 'next'
import Link from "next/link"

interface HomeProps {
  articles: ArticleData[]
}

const Home: NextPage<HomeProps> = ({ articles }) => {
  console.log(articles)
  return (
    <ul>
      {
        articles.map(({ id, attributes: { title } }: ArticleData) => (
          <li key={id}>
            <Link passHref href={`/articles/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

Home.getInitialProps = async () => {
  const articles: ArticleData[] = await new Article().getAll();

  return {
    articles
  }
}

export default Home
