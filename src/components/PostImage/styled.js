import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PostImage = styled(Img)`
  display: block;
  width: 100%;
  height: 20rem;
  ${media.lessThan("large")`
    display: flex;
    width: 100%;
    height: 22rem;
`}
`
