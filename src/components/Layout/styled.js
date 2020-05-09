import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.body`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
      flex-direction: column;
  `}
`
export const LayoutMain = styled.main`
  background-color: var(--background-color);
  min-height: 100vh;
  padding: 5rem 0 5rem 0;
  transition: background, color 0.5s;
  width: 100%;
  ${media.lessThan("large")`
    padding: 3rem 0 2rem 0;
  `}
`
