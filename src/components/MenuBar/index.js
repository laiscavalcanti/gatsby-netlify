import React, { useState, useEffect } from "react"
import scrollToTop from "../../utils/scrollToToP"

import { Home } from "@styled-icons/typicons/Home"
import { Lightbulb } from "@styled-icons/fa-regular/Lightbulb"
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Pesquisar no site">
          <S.MenuBarItem>
            <SearchAlt2 />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Apagar a luz"
          onClick={() => {
            window.__setPreferredTheme(isLightMode ? "dark" : "light")
          }}
          className={theme}
        >
          <Lightbulb />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo" onClick={scrollToTop}>
          <UpArrowAlt />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
