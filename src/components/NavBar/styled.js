import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 1rem;
  padding: 1rem;
`
export const LayoutList = styled.li`
  margin: 0.7rem;
  padding-top: 0rem;
  .active {
    color: var(--color);
  }
  ${media.lessThan("large")`
   margin: 0;
  `}
`
export const LayoutLink = styled(Link)`
  color: var(--colorSideBar);
  letter-spacing: 0rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  &:hover {
    color: var(--colorHoverSideBar);
    transition: opacity 0.3s, transform 0.3s;
  }
  ${media.lessThan("large")`
    font-size: 0.7rem;
  `}
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
