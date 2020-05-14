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
    margin-bottom: 1.1rem;
    margin-right: 0rem;
  `}
`
export const SocialLinksItem = styled.li`
  margin: 0.8rem 0.5rem 0.8rem 0.5rem;
  ${media.lessThan("large")`
    margin: 0.7rem;

  `}
`
export const SocialLinksLink = styled.a`
  color: var(--sameColorWhite);
  transition: color 0.5s;
  transition: transform 0.2s;
  &:hover {
    color: var(--color);
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 25px;
  ${media.lessThan("large")`
    width: 21px;
    height: 21px;
  `}
`
