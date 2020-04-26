import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
  flex-direction: column;
  `}
`
export const LayoutMain = styled.main`
  background-color: var(--background-color);
  min-height: 100vh;
  padding: 4.5rem 3.75rem 6rem 20rem;
  transition: background, color 0.5s;
  width: 100%;
  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`
