import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--black);
  margin: 0.5rem;
  display: flex;
  padding: 1rem 2rem;
  background-color: var(--background-color);
  justify-content: space-between;
  align-content: flex-end;
  a {
    color: var(--black);
    transition: color 0.5s;

    &:hover {
      color: var(--backgroundMenuBar);
    }
  }
`
