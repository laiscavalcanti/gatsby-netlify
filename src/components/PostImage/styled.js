import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage as Img } from "gatsby-plugin-image"

export const PostImage = styled(Img)`
  display: block;
  width: 100%;
  height: 35rem;
  margin-top: 0rem;
  ${media.lessThan("large")`
    display: flex;
    width: 100%;
    height: 22rem;
`}
`
