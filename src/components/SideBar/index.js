import React from "react"
import Logo from "../Logo"
import * as S from "./styled"
import NavBar from "../NavBar"

const SideBar = () => (
  <S.SideBarWrapper>
    <S.LogoItem>
      <Logo />
    </S.LogoItem>
    <S.LinkList>
      <NavBar />
    </S.LinkList>
  </S.SideBarWrapper>
)

export default SideBar
