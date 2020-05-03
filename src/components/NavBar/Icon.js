import React from "react"
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2"
import styled from "styled-components"
import media from "styled-media-query"

const Icon = () => (
  <IconSearch>
    <SearchAlt2 />
  </IconSearch>
)
export const IconSearch = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  background: none;
  cursor: pointer;
  ${media.lessThan("large")`
    display: none;
    height:17px;
    width: 17px;
    margin: 0;
  `}
  color: var(--sameColorWhite);
  &:hover {
    color: var(--sameColorWhite);
  }
`
export default Icon
