import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          description
          author
        }
      }
    }
  `)
  return (
    <S.ProfileContainer>
      <S.ContainerLine>
        <Avatar />
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
      </S.ContainerLine>

      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileContainer>
  )
}

export default Profile
