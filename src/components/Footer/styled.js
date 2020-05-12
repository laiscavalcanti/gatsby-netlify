import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 6.5rem;
  width: 100%;
  padding: 0;
  background-color: var(--sameColorBlack);
  ${media.lessThan("large")`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 5.5rem;
  `}
`
export const MenuBarGroup = styled.div`
  display: flex;
  ${media.lessThan("large")`
    flex-direction: row;
  `}
`
export const MenuBarLink = styled(Link)`
  display: block;
`
export const MenuBarItem = styled.span`
  padding: 1.1rem 0.5rem 1.1rem 0.5rem;
  color: var(--backgroundMenuBar);

  &:hover {
    color: var(--backgroundMenuBar);
    transition: opacity 0.3s, transform 0.3s;
  }
  ${media.lessThan("large")`
    padding: 0.5rem;
  `}
`
