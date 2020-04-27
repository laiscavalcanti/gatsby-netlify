import React from "react"

import * as S from "./styled"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarItem>
          <Profile />
        </S.MenuBarItem>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem>
          <SocialLinks />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
