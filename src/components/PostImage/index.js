import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ImagePost = ({ imagePost }) => {
  return <S.PostImage fluid={imagePost.childImageSharp.fluid} />
}

ImagePost.propTypes = {
  imagePost: PropTypes.object,
}

export default ImagePost
