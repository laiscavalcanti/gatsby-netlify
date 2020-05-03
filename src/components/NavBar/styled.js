import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  height: auto;
  margin: 1rem;
  padding: 1rem;
  color: var(--samecolorWhite);
  @media only screen and (max-width: 600px) {
    background-color: lightblue;
  }
`
export const LayoutList = styled.li`
  margin: 0.7rem;
  padding-top: 0rem;
  .active {
    color: var(--sameColorBlack);
  }
  ${media.lessThan("large")`
   display: flex;
   flex-direction: row;
   margin: 0rem 0.4rem 0.7rem 0.4rem;
   padding-left: 0.8rem;
  `}
`
export const LayoutLink = styled(Link)`
  color: var(--sameColorWhite);
  letter-spacing: 0rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  position: relative;
  &:after {
    margin-bottom: -6px;
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  ${media.lessThan("large")`
  display: flex;
   flex-direction: row;
    font-size: 0.7rem;
  `}
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
