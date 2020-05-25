import React from "react"

import PostItemSearch from "../PostItemSearch"

const Hit = ({ hit }) => (
  <PostItemSearch
    slug={hit.fields.slug}
    date={hit.date}
    title={hit.title}
    description={hit.description}
    tags={hit.tags}
  />
)

export default Hit
