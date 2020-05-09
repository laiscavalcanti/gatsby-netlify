import styled from "styled-components"
import media from "styled-media-query"

export const LogoWrapper = styled.div`
  width: 18rem;
  ${media.lessThan("large")`
    max-width: 15rem;
    margin-left: 2rem;
  `}
`
