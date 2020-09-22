import React from "react"
import { Link } from "gatsby"
import Article from "../components/article"
import blogBig from "../images/blog_big.jpg"
import blogPupular_1 from "../images/blog_popular_1.jpg"
import blogPupular_2 from "../images/blog_popular_2.jpg"
import blogPupular_3 from "../images/blog_popular_3.jpg"
import "../scss/popularArticles.scss"

export default function popularArticles() {
  return (
    <section className={"popularArticles"}>
      <h5 className="popularArticles__title">POPULAR</h5>
      <Article
        orientation="row"
        size="big"
        title="Feugiat sodales at nullam tellus."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
        imageURL={blogBig}
      />
      <div className="popularArticles__container">
        <Article
          orientation="column"
          title="Porta proin tellus sed pulvinar odio eu pulvinar."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageURL={blogPupular_1}
        />
        <Article
          orientation="column"
          title="Non quam tortor, proin eu egestas scelerisque purus."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageURL={blogPupular_2}
        />
        <Article
          orientation="column"
          title="Amet amet sed pharetra risus sit eget interdum."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageURL={blogPupular_3}
        />
      </div>
      <Link to="/#" className="popularArticles__all">
        See All Popular Article
      </Link>
    </section>
  )
}
