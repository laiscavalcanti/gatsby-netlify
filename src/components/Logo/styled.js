import styled from "styled-components"
import media from "styled-media-query"

export const LogoWrapper = styled.div`
  width: 18rem;
  ${media.lessThan("large")`
    width: 16rem;
  `}
`
