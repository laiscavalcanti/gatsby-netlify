import React from "react"
import PropTypes from "prop-types"
import ReactGA from "react-ga"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from './styled'

const trackClick = (item) => {
  ReactGA.event({
    category: 'Tag',
    action: 'click',
    label: `Tag - ${item}`
  })
}
const Category = ({ tags, isLink }) => {
  return (
    <S.Tags>
      {tags.map((tag, i) => (
        <S.TagHolder key={i}>
          { isLink ? (
            <AniLink

              cover
              direction="down"
              duration={1}
              onClick={() => trackClick(tag)}>
                <S.TagItem>{tag}</S.TagItem>
            </AniLink>
            ) : (<S.TagItem>{tag}</S.TagItem>)
          }
        </S.TagHolder>
      ))}
    </S.Tags>
  )
}

Category.propTypes = {
  tags: PropTypes.node.isRequired,
  isLink: PropTypes.bool
}

export default Category