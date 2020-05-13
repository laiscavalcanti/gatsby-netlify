import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SideBarWrapper = styled.ul`
  display: flex;
  padding-left: 16rem;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 5.7rem;
  position: fixed;
  background-color: var(--color);
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;
   height: 5rem;
   margin: 0;
   padding: 0;
  `}
`
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .menu-toggle {
    margin: 0.7rem 1.7rem 0;
    cursor: pointer;
    display: none;
    position: fixed;
    right: 10px;
    top: calc(100vh + 30px);
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 15px;
    transition: all 0.3s ease;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 8px;
      width: 30px;
      height: 3px;
      background: white;
      border-radius: 15px;
      transform-origin: right;
      transform: scaleX(0.8);
    }
    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 8px;
      width: 30px;
      height: 3px;
      background: white;
      border-radius: 15px;
      transform-origin: right;
      transform: scaleX(0.8);
    }
  }
  ${media.lessThan("large")`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    will-change: transform;
    background-color: var(--color);
    a {
      padding-bottom: 10px;
    }
    &.toggle {
      transform: translateY(0);
    }
    .menu-toggle {
      display: block;
      &.toggle {
        top: 30px;
        transform: rotate(45deg);
        &::after {
          transform: scaleX(1) rotate(90deg) translate(25%, 490%);
        }
        &::before {
          opacity: 0;
        }
      }
    }
  }
`}
`
export const LogoItem = styled(Link)`
  display: flex;

  margin: 0.5rem 0rem 0.5rem 4rem;
  ${media.lessThan("large")`
   display: flex;
   width: 60%;
   flex-direction: column;
   margin: 0.7rem 0rem 0 0;
  `}
`
export const WrapperButtonTheme = styled.section`
  display: flex;
  margin-top: 0.5rem;
  ${media.lessThan("large")`
    margin-left: -7.5rem;
    margin-top: -2rem;
  `}
`
