import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"
import LogoSite from "./subsidiario_logo.svg"

import * as S from "./styled"

const Logo = () => (
    <AniLink to="/" cover direction="left" duration={0.5} bg={getThemeColor()}>
      <S.LogoWrapper>
        <img src={LogoSite} alt="logo" className="logo" />
      </S.LogoWrapper>
    </AniLink>
  
  
  /*const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "red.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <AniLink to="/" cover direction="left" duration={0.5} bg={getThemeColor()}>
      <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} alt="Logo" />
    </AniLink>
  )*/
)

export default Logo
