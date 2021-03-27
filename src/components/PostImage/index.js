import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ImagePost = ({ imagePost }) => {
  return <S.PostImage image={imagePost} />
}

ImagePost.propTypes = {
  imagePost: PropTypes.object,
}

export default ImagePost
