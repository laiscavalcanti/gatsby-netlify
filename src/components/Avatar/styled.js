import styled from "styled-components"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 4.5rem;
  width: 4.5rem;
  ${media.lessThan("large")`
  height: 3.5rem;
  width: 3.5rem;
  margin-left: 0.4rem;
  `}
`
