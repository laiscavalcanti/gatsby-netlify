import React, { useState, useEffect } from "react"

import { Lightbulb } from "@styled-icons/fa-regular/Lightbulb"
import links from "./content"
import * as S from "./styled"

const NavBar = () => {
  const [theme, setTheme] = useState(null)
  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])
  return (
    <S.LayoutNav>
      {links.map((link, i) => (
        <S.LayoutList key={i}>
          <S.LayoutLink to={link.url} activeClassName="active">
            {link.label}
            {link.icon}
          </S.LayoutLink>
        </S.LayoutList>
      ))}
      <S.WrapperIconLight
        title="Apagar a luz"
        onClick={() => {
          window.__setPreferredTheme(isLightMode ? "dark" : "light")
        }}
        className={theme}
      >
        <S.IconLight>
          <Lightbulb />
        </S.IconLight>
      </S.WrapperIconLight>
    </S.LayoutNav>
  )
}

export default NavBar
