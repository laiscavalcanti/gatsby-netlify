import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import { GridWrapper } from "../components/GridPost/styled"

const Tags = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <GridWrapper>
        {edges.map(
          ({
            node: {
              frontmatter: {
                author,
                tags,
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
              author={author}
              slug={slug}
              tags={tags}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={fluid}
            />
          )
        )}
      </GridWrapper>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            title
            date(formatString: "MMMM DD, YYYY")
            description
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
