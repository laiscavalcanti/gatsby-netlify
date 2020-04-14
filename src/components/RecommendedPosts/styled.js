import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section `
    display: flex;
    background-color: #f5f5f5;
`
export const RecommendedLink = styled(Link) `
  align-items: center;
  background:#f5f5f5;
  color: #900020;
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
    &:hover{
      opacity: 0.6;
      color: black;
    }
    &.previous{
      margin-left: 3rem;    
    }
    &.next{
      justify-content: flex-end;
      margin-right: 3rem;  
    }
    &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  } 
`