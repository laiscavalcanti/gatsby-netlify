import React from "react"
import PropTypes from "prop-types"

import PostItemSearch from "../PostItemSearch"

const Hit = props => {
  const { hit } = props
  return (
    <PostItemSearch
      slug={hit.fields.slug}
      date={hit.date}
      title={hit.title}
      description={hit.description}
      tags={hit.tags}
    />
  )
}
Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}
export default Hit
