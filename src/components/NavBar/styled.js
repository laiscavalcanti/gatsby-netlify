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
    color: var(--sameColorWhite);
    opacity: 0.6;
  }
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;

  `}
`
export const LayoutLink = styled(AniLink)`
  color: var(--sameColorWhite);
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto Slab", sans-serif;
  display: block;
  position: relative;
  &:after,
  &:before {
    transition: all 0.5s;
  }
  &:hover {
    color: var(--sameColorWhite);
    box-shadow: yellow;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--sameColorWhite);
    opacity: 0.8;
    height: 2px;
    top: 20px;
  }

  &:hover:after {
    width: 100%;
  }

  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
