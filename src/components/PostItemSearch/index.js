import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import getThemeColor from "../../utils/getThemeColor"
import { GridWrapper } from "../GridPost/styled"
import * as S from "./styled"

class PostItemSearch extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <GridWrapper>
        {posts.map(({ node: post }) => (
          <S.PostItemLink to={post.fields.slug} cover direction="left" duration={0.5} bg={getThemeColor()}>
            <S.PostItemWrapper>
              <S.PostItemInfo>
                <S.PostItemDate>
                  {post.frontmatter.date} - {post.frontmatter.tags}
                </S.PostItemDate>
                <S.PostItemTitle>{post.frontmatter.title}</S.PostItemTitle>
                <S.PostItemAuthor>{post.frontmatter.author}</S.PostItemAuthor>
                <S.PostItemDescription>{post.frontmatter.escription}</S.PostItemDescription>
              </S.PostItemInfo>
            </S.PostItemWrapper>
          </S.PostItemLink>
        ))}
      </GridWrapper>
    )
  }
}
PostItemSearch.propTypes = {
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
        allMarkdownRemark {
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
              }
            }
          }
        }
      }
    `}
    render={data => <PostItemSearch data={data} />}
  />
)
