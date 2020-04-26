import React, { useState, useEffect } from "react"

import * as S from "./styled"
import Profile from "../Profile"

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarItem>
          <Profile />
        </S.MenuBarItem>
      </S.MenuBarGroup>
      <S.MenuBarGroup></S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
