import React from "react"
import Profile from "../Profile"
import Logo from "../Logo"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"
import NavBar from "../NavBar"
import Avatar from "../Avatar"

const SideBar = () => (

    <S.SideBarWrapper>
        <S.LogoItem>
            <Logo />
        </S.LogoItem>
        <S.SocialLinksItem>
        <SocialLinks />
        </S.SocialLinksItem>
        <NavBar />
        <S.AvatarItem>
            <Avatar />
        </S.AvatarItem>
        
        <Profile />
    </S.SideBarWrapper>
)

export default SideBar
