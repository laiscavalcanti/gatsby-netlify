import React from "react"
import Logo from "../Logo"
import * as S from "./styled"
import NavBar from "../NavBar"
import ButtonTheme from "../ButtonTheme"

const SideBar = () => (
  <S.SideBarWrapper>
    <S.LogoItem>
      <Logo />
      <NavBar />
    </S.LogoItem>
    <S.WrapperButtonTheme>
      <ButtonTheme />
    </S.WrapperButtonTheme>
  </S.SideBarWrapper>
)

export default SideBar
