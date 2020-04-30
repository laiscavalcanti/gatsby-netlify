import React from "react"
import { Link } from "gatsby"
import logoSVG from "./red.png"

import * as S from "./styled"

const Logo = () => {
  return (
    <>
      <S.LogoWrapper>
        <Link to="/">
          <img src={logoSVG} />
        </Link>
      </S.LogoWrapper>
    </>
  )
}

export default Logo
