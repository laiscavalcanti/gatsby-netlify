import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 6.5rem;
  width: 100%;
  padding: 0;
  background-color: var(--sameColorBlack);
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
  padding: 1.1rem;
  color: var(--backgroundMenuBar);

  &:hover {
    color: var(--backgroundMenuBar);
    transition: opacity 0.3s, transform 0.3s;
  }

  &.light {
    color: #f0e68c;
    &:hover {
      color: #ffdb58;
    }
    &.display {
      ${media.lessThan("large")`
      display: none;
    `}
    }
    ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
    ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
  }
`
