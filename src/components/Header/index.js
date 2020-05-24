import React from "react"

import Logo from "../Logo"
import * as S from "./styled"
import NavBar from "../NavBar"
import ButtonTheme from "../ButtonTheme"
import MenuToggle from "./Toggle"

const handleClick = event => {
  const menu = document.querySelector(".menu-toggle")
  menu.classList.toggle("toggle")
  event.target.parentNode.classList.toggle("toggle")
}

const Header = () => {
  return (
    <S.SideBarWrapper>
      <S.LogoItem>
        <Logo />
      </S.LogoItem>

      <MenuToggle />
      <NavBar onClick={handleClick} />
      <S.WrapperButtonTheme>
        <ButtonTheme onClick={handleClick} />
      </S.WrapperButtonTheme>
    </S.SideBarWrapper>
  )
}

export default Header
