import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

const SingleTags = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <div>Posts {`${tagName}`}</div>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={post.fields.slug}>
                <span> {post.frontmatter.title}</span>
                <span>{post.frontmatter.description}</span>
                <span>{post.frontmatter.date}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default SingleTags
