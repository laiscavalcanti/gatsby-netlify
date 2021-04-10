import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const Avatar = () =>{
    const { avatarImage } = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: {eq: "avatar2.jpg"}){
                    childImageSharp {
                        fluid(maxWidth: 70) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                     }
                    }
                }
            `
  )

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar