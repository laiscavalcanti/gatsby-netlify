import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

const PostFeatured = () => {
  const { markdownRemark } = useStaticQuery(query)

  return (
    <S.FeaturedLink to={markdownRemark.fields.slug}>
      <S.WrapperFeatured>
        <S.FeaturedImage fluid={markdownRemark.frontmatter.image.childImageSharp.fluid} />
        <S.FeaturedInfo>
          {markdownRemark.frontmatter.date}
          {markdownRemark.frontmatter.tags}
          <S.FeaturedTitle>{markdownRemark.frontmatter.title}</S.FeaturedTitle>
          <S.FeaturedDescription>{markdownRemark.frontmatter.description}</S.FeaturedDescription>
        </S.FeaturedInfo>
      </S.WrapperFeatured>
    </S.FeaturedLink>
  )
}

export default PostFeatured

const query = graphql`
  query PostFeatured {
    markdownRemark(frontmatter: { featured: { eq: true } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
