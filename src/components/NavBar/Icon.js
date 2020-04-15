import React from "react"
import { Search } from "@styled-icons/evil/Search"
import styled from "styled-components"

const Icon = () => (
  <IconSearch>
    <Search />
  </IconSearch>
)
export const IconSearch = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
`
export default Icon
