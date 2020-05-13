import styled from "styled-components"
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--black);
  margin: 0.5rem;
  display: flex;
  padding: 1rem 2rem 0 2rem;
  margin: 0 2rem 0 2rem;
  font-size: 1rem;
  background-color: var(--background-color);
  justify-content: space-around;
  align-content: flex-end;
  ${media.lessThan("large")`
      padding: 0.5rem 0 0 0.5rem;
      margin: 0 0.5rem 0 0.5rem;
      font-size: 0.8rem;
  `}
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  a {
    color: var(--black);
    transition: color 0.5s;

    &:hover {
      color: var(--backgroundMenuBar);
    }
  }
`
