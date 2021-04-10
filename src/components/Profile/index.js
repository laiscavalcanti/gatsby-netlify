import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <S.ProfileContainer>
      <Avatar />
      <S.ContainerLine>
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
        <S.ProfileDescription>Sou alguém que não tem ideias, nem quer tê-las, e nem razão em nada tem.</S.ProfileDescription>
      </S.ContainerLine>
    </S.ProfileContainer>
  )
}

export default Profile
