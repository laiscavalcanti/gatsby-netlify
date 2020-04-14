import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"


const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
        {postList.map(
          ({
            node: {
              frontmatter: {
                tags,
                background,
                date,
                description,
                title,
                image: {
                  childImageSharp: { fluid },
                },
              },
              timeToRead,
              fields: { slug },
            },
          }) => (           
            <PostItem
              slug={slug}
              background={background}
              tags={tags}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={fluid}
            />
          )
        )}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}
export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            tags
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
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
`
export default BlogList
