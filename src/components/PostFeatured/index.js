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
          <S.FeaturedTitle>{markdownRemark.frontmatter.title}</S.FeaturedTitle>
          <S.FeaturedAuthor>{markdownRemark.frontmatter.author}</S.FeaturedAuthor>
          <S.FeaturedDescription>{markdownRemark.frontmatter.description}</S.FeaturedDescription>
          <S.FeaturedDate>
            {markdownRemark.frontmatter.date} - {markdownRemark.frontmatter.tags}
          </S.FeaturedDate>
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
        author
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
