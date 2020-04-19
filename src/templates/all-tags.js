import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

const AllTags = ({ props, pageContext }) => {
  console.log(pageContext)
  const { posts, tagName } = pageContext
  return <Layout></Layout>
}

export default AllTags
