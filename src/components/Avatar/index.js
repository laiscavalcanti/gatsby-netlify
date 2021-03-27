import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar2.webp" }) {
          childImageSharp {
            gatsbyImageData(width: 100 layout: CONSTRAINED)
          }
        }
      }
    `
  )

  return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} alt="avatar" />
}

export default Avatar
