import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  display: flex;
  border-top: 1px dashed var(--black);
  margin: 0 8rem 0 8rem;
  background-color: var(--background-color);
  ${media.lessThan("large")`
    line-height: 1;
    font-size: 0.8rem;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
  `}
`
export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--background-color);
  color: var(--black);
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }

  ${media.lessThan("large")`
  widht: 100%;
    line-height: 1.3;
    font-size: 0.8rem;
    padding: 0;
    margin-left: 1rem;
  `}

  &.previous {
    margin-left: 3rem;
    ${media.lessThan("large")`
      margin-left: 0rem;
  `}
  }
  &.next {
    justify-content: flex-end;
    margin-right: 3rem;

    ${media.lessThan("large")`
      margin-right: 0rem;
  `}
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
