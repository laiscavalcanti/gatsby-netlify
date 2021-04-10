import React from "react"
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const PostItem = ({ slug, description, title, image, date, tags, author }) => (
  <S.PostItemLink to={slug} cover direction="left" duration={0.5} bg={getThemeColor()}>
    <S.PostItemWrapper>
      <S.PostItemImg fluid={image} className=".img" />
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} - {tags}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemAuthor>{author}</S.PostItemAuthor>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  author: PropTypes.string,
}

export default PostItem
