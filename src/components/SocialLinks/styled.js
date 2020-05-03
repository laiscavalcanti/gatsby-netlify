import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.div`
  display: flex;
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
  `}
`
export const SocialLinksList = styled.nav`
  display: flex;
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
  `}
`
export const SocialLinksItem = styled.li`
  margin: 1rem;
  ${media.lessThan("large")`
    margin: 0.5rem;
  `}
`
export const SocialLinksLink = styled.a`
  color: var(--sameColorWhite);
  transition: color 0.5s;
  transition: transform 0.2s;
  &:hover {
    font-size: 36px;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    transition: all 0.2s ease-in-out;
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 0px;
      height: 5px;
      margin: 3px 0 0;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.75s;
      opacity: 0;
      background-color: darken(orange, 5%);
    }
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 25px;
  ${media.lessThan("large")`
    width: 15px;
    height: 2px;
  `}
`
