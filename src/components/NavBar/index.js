import React from "react"
import getThemeColor from "../../utils/getThemeColor"
import links from "./content"
import * as S from "./styled"

const NavBar = () => {
  return (
    <S.LayoutNav>
      {links.map((link, i) => (
        <S.LayoutList key={i}>
          <S.LayoutLink
            to={link.url}
            activeClassName="active"
            cover
            direction="right"
            duration={0.5}
            bg={getThemeColor}
          >
            {link.label}
            {link.icon}
          </S.LayoutLink>
        </S.LayoutList>
      ))}
    </S.LayoutNav>
  )
}

export default NavBar
