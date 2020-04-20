import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({ slug, description, title, image, date, tags }) => (
  <S.PostItemLink to={slug} cover direction="right" duration={0.3}>
    <S.PostItemWrapper>
      <S.PostItemImg fluid={image} />
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} - {tags}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array,
  background: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  imagePost: PropTypes.object.isRequired,
}

export default PostItem
