import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: auto;
  margin: 1rem;
  padding: 1rem;
`
export const LayoutList = styled.li`
  display: flex;
  margin: 0.3rem;
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
  letter-spacing: 0.2rem;
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
export const WrapperIconLight = styled.button`
  padding-bottom: 1rem;
  color: var(--colorSideBar);
  letter-spacing: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  border: none;
  background: none;
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

export const IconLight = styled.div`
  width: 15px;
  height: 15px;
  border: none;
  background: none;
`
