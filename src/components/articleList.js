import React from "react"
import { Link } from "gatsby"
import Article from "./article"
import leftArrow from "../icons/leftArrow.svg"
import rightArrow from "../icons/rightArrow.svg"
import "../scss/articleList.scss"

export default function articleList({ articles }) {
  console.log(articles)

  return (
    <section className="articleList">
      <h5 className="articleList__title">ALL ARTICLE</h5>
      {articles.map(article => (
        <Article orientation="row" {...article} />
      ))}

      <div className="articleList__pagination">
        <Link className="articleList__link" to="/#">
          <img src={leftArrow} alt="previous" />
          <span className="articleList__linkLabel">New Post</span>
        </Link>
        <Link className="articleList__link" to="/#">
          <span className="articleList__linkLabel">Old Post</span>
          <img src={rightArrow} alt="next" />
        </Link>
      </div>
    </section>
  )
}
