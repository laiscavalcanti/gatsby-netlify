import styled from "styled-components"
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`
export const LayoutList = styled.li`
  margin: 0.3rem;
  padding-top: 0rem;
  .active {
    color: var(--white);
  }
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
`
