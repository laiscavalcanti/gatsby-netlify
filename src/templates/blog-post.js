import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"

import { Tag } from "@styled-icons/boxicons-regular/Tag"
import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const tagName = pageContext
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        <S.IconWrapper>
          <S.Icon>
            <Tag />
          </S.Icon>
          <S.PostTag to={`/tags/${tagName}`}>{post.frontmatter.tags}</S.PostTag>
        </S.IconWrapper>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  )
}
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`
export default BlogPost
