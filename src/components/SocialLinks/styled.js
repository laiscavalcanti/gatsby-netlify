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
  color: var(--colorSideBar);
  transition: color 0.5s;
  &:hover {
    color: var(--colorHoverSideBar);
    transition: opacity 0.3s, transform 0.3s;
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 2px;
  ${media.lessThan("large")`
    width: 15px;
    height: 2px;
  `}
`
