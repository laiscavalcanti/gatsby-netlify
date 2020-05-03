import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"
import imgLogo from "../../images/menor.png"

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
  background-color: var(--color);
  ${media.lessThan("large")`
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 4rem;
    padding: 0.5rem 0.5rem;
    width: 100%;
  `}
`
export const LogoItem = styled(Link)`
  display: flex;
  margin: 0.5rem 0rem 0.5rem 4rem;
  ${media.lessThan("large")`
    height:3.4rem;
    width: 4.875rem;
    margin: 0;
    background-image: url(${imgLogo});
  `}
`
export const WrapperButtonTheme = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  ${media.lessThan("large")`
    height:3.785rem;
    width: 3.875rem;
    margin: 0;
    object-fit: cover;
  `}
`
