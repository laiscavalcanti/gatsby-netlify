import styled from "styled-components"

export const SocialLinksWrapper = styled.div`
  display: flex;
`
export const SocialLinksList = styled.nav`
  display: flex;
`
export const SocialLinksItem = styled.li`
  margin: 1rem;
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
`
