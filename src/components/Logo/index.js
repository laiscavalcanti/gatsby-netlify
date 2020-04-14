import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Logo = () => {
    const { avatarLogo } = useStaticQuery(
        graphql`
            query {
                avatarLogo: file(relativePath: { eq: "logo_subsidiario.png"}) {
                    childImageSharp{
                        fixed(width: 280, height: 130 ){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `
    )
  
    return <S.LogoLink to='/' >
            <S.LogoWrapper fixed={avatarLogo.childImageSharp.fixed} />
        </S.LogoLink>
}

export default Logo