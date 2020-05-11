import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logoSVG from "./red.png"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Logo = () => {
  return (
    <>
      <S.LogoWrapper>
        <AniLink to="/" cover direction="left" duration={0.5} bg={getThemeColor()}>
          <img src={logoSVG} alt="logo" />
        </AniLink>
      </S.LogoWrapper>
    </>
  )
}

export default Logo
