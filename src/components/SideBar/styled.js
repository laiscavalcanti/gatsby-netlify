import styled from "styled-components"
import media from "styled-media-query"

export const SideBarWrapper = styled.aside`
  /*display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 22rem;*/
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  position: fixed;
  background-color: var(--backgroundSideBar);
  ${media.lessThan("large")`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    height: 10rem;
    padding: 2rem 2rem;
    width: 100%;
  `}
`
export const LinkList = styled.section`
  display: flex;
  justify-content: flex-start;
`
export const LogoItem = styled.section`
  ${media.lessThan("large")`
    height: 9.785rem;
    width: 12.875rem;
  `}
`
export const SocialLinksItem = styled.section`
  margin-bottom: 4rem;
  ${media.lessThan("large")`
    display: none;
  `}
`
