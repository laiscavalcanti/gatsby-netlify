import React from "react"
//import ImageHeader from "../ImageHeader"
import SideBar from "../SideBar"
import Logo from "../Logo"

import * as S from './styled'

const Header = () => (
  <>
  <S.HeaderWrapper>
    <S.ContainerLogo>
        <Logo />
      </S.ContainerLogo>
      <S.ContainerLink>
        <SideBar />
      </S.ContainerLink>
  </S.HeaderWrapper>
  </>
)

export default Header
