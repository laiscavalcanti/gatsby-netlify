import React from "react"
import PropTypes from "prop-types"

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

const SideBar = () => {
  return (
    <S.SideBarWrapper>
      <S.LogoItem>
        <Logo />
      </S.LogoItem>
      <S.NavWrapper>
        <MenuToggle />
        <NavBar onClick={handleClick} />
        <S.WrapperButtonTheme>
          <ButtonTheme onClick={handleClick} />
        </S.WrapperButtonTheme>
      </S.NavWrapper>
    </S.SideBarWrapper>
  )
}

export default SideBar
