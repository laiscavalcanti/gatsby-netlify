import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PostImage = styled(Img)`
  display: block;
  max-width: 70rem;
  margin-left: 2rem;
  height: 20rem;
  ${media.lessThan("large")`
    display: none;
    `}
`
