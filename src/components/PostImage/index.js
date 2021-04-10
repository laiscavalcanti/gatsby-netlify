import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ImagePost = ({ imagePost }) => {
  return <S.PostImage fluid={imagePost} />
}

ImagePost.propTypes = {
  imagePost: PropTypes.object.isRequired,
}

export default ImagePost
