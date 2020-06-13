import React, { useState } from "react"
import Logo from "../Logo"
import * as S from "./styled"
import NavBar from "../NavBar"
import ButtonTheme from "../ButtonTheme"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <S.SideBarWrapper>
      <S.LogoItem>
        <Logo />
      </S.LogoItem>
      <S.NavWrapper>
        <S.Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <S.Hamburger open /> : <S.Hamburger />}
        </S.Toggle>
        {navbarOpen ? (
          <S.NavBox>
            <NavBar />
            <S.WrapperButtonTheme>
              <ButtonTheme />
            </S.WrapperButtonTheme>
          </S.NavBox>
        ) : (
          <S.NavBox open>
            <NavBar />
            <S.WrapperButtonTheme>
              <ButtonTheme />
            </S.WrapperButtonTheme>
          </S.NavBox>
        )}
      </S.NavWrapper>
    </S.SideBarWrapper>
  )
}

export default Header
