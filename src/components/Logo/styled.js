import styled from "styled-components"
import media from "styled-media-query"
//import Img from "gatsby-image"

export const LogoWrapper = styled.div`
  width: 16.5rem;
  ${media.lessThan("large")`
    max-width: 14rem;
    margin-left: 0.5rem;
  `}
`
