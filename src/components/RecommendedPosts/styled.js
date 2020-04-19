import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  display: flex;
  background-color: var(--background-color);
`
export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--background-color);
  color: var(--backgroundHoverPostItem);
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &.previous {
    margin-left: 3rem;
  }
  &.next {
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
