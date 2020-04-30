import React from "react"
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2"
import styled from "styled-components"

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
  color: var(--sameColorWhite);
  &:hover {
    color: #900020;
  }
`
export default Icon
