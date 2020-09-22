import React from "react"
import PropTypes from "prop-types"
import bookmarksIcon from "../icons/bookmarks.svg"
import shareIcon from "../icons/share.svg"
import "../scss/article.scss"

const Article = ({ orientation, size, title, description, imageURL }) => {
  return (
    <article
      className={`article article--${orientation} ${
        size ? "article--" + size : ""
      }`}
    >
      <img
        className={`article__image ${size ? "article__image--" + size : ""}`}
        src={imageURL}
        alt={imageURL}
      />

      <div className="article__textContent">
        <h5
          className={`article__title ${size ? "article__title--" + size : ""}`}
        >
          {title}
        </h5>
        <p className={`article__description`}>{description}</p>
        <div className="article__details">
          <div className="article__detailsText">
            <p className="article__author">Samatha Leuthex</p>
            <p className="article__date">May 5, 3 min read</p>
          </div>
          <div className="article__icons">
            <img src={bookmarksIcon} alt="bookmark" className="article__icon" />
            <img src={shareIcon} alt="share" className="article__icon" />
          </div>
        </div>
      </div>
    </article>
  )
}

Article.propTypes = {
  orientation: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default Article
