import styled from "styled-components"
import media from "styled-media-query"

export const SideBarWrapper = styled.aside`
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 6rem;
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
export const LogoItem = styled.section`
  display: flex;
  margin: 0.5rem 0rem 0.5rem 4rem;
  ${media.lessThan("large")`
    height: 9.785rem;
    width: 12.875rem;
  `}
`
export const WrapperButtonTheme = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`
