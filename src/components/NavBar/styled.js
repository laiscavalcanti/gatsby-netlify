import styled from "styled-components"
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  
`
export const LayoutList = styled.li`
    padding-top: 0rem;
    .active{
      color: #bc8f8f;
    }
`
export const LayoutLink = styled(Link)`
  color: black;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Inconsolata', sans-serif;
  &:hover{
        color: #900020;
        transition: opacity 0.3s, transform 0.3s;
        background: #f5f5f5;
    }
`