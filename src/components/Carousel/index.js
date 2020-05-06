import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

import * as S from "./styled"

class Slideshow extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const params = {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bullets: true,
      },
      grabCursor: false,
      loop: true,
    }

    return (
      <S.CarouselWrapper>
        <div className="slideshow">
          <div class="swiper-container">
            <Swiper {...params}>
              {posts &&
                posts.map(({ node: post }) => (
                  <div key={post.fields.slug}>
                    <S.CarouselLink to={post.fields.slug}>
                      <S.CarouselImage fluid={post.frontmatter.image.childImageSharp.fluid} alt="oi" />
                      <S.CarouselInfo>
                        <S.CarouselTitle>{post.frontmatter.title}</S.CarouselTitle>
                        <S.CarouselAuthor>{post.frontmatter.author}</S.CarouselAuthor>
                        <S.CarouselDescription>{post.frontmatter.description}</S.CarouselDescription>
                      </S.CarouselInfo>
                    </S.CarouselLink>
                  </div>
                ))}
            </Swiper>
          </div>
        </div>
      </S.CarouselWrapper>
    )
  }
}

Slideshow.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "slideshow" } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                author
                tags
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              timeToRead
            }
          }
        }
      }
    `}
    render={(data, count) => <Slideshow data={data} count={count} />}
  />
)
