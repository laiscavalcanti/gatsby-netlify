import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const LayoutNav = styled.nav`
  display: flex;
  height: auto;
  margin: 1rem;
  padding: 1rem;
  color: var(--samecolorWhite);
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;

  `}
`
export const LayoutList = styled.li`
  margin: 0.7rem;
  padding-top: 0rem;
  .active {
    color: var(--sameColorBlack);
  }
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;

  `}
`
export const LayoutLink = styled(AniLink)`
  color: var(--sameColorWhite);
  letter-spacing: 0rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  position: relative;
  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: 1px;
    background: var(--sameColorWhite);
    content: "";
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    transform: translateY(10px);
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
  }

  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
