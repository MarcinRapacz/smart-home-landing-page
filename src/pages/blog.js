import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallBanner from "../components/smallBanner"
import PopularArticles from "../components/popularArticles"
import ArticleList from "../components/articleList"
import ArticleFilter from "../components/articleFilter"
import "../scss/blogPage.scss"

import article1 from "../images/article_1.jpg"
import article2 from "../images/article_2.jpg"
import article3 from "../images/article_3.jpg"
import article4 from "../images/article_4.jpg"
import article5 from "../images/article_5.jpg"

const avaliableArticles = [
  {
    title: "Massa eu in laoreet enim augue vulputate nunc.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    imageURL: article1,
  },
  {
    title: "Feugiat a euismod arcu feugiat posuere morbi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    imageURL: article2,
  },
  {
    title: "Sociis purus pellentesque faucibus vitae et felis.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    imageURL: article3,
  },
  {
    title: "Cursus feugiat mi pellentesque mauris sed eu.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    imageURL: article4,
  },
  {
    title: "A morbi arcu curabitur etiam fringilla augue.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    imageURL: article5,
  },
]

export default function BlogPage() {
  const title = "Blog Afrianska"
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

  const [filterText, setFilterText] = useState("")

  const filterArticle = articles => {
    if (!filterText) {
      return articles
    }

    return articles.filter(article =>
      article.title.toLowerCase().includes(filterText)
    )
  }

  return (
    <Layout staticMode={true}>
      <SEO title="Blog" />
      <SmallBanner title={title} text={text} />
      <div className="blogPage__content">
        <ArticleFilter handleFilterText={setFilterText} />
        {!filterText && <PopularArticles />}
        <hr className="blogPage__line" />
        <ArticleList articles={filterArticle(avaliableArticles)} />
      </div>
    </Layout>
  )
}
