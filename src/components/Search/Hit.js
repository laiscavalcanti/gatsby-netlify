import React from "react"

import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    date={hit.date}
    title={hit.title}
    description={hit.description}
    tags={hit.tags}
    image={hit.image}
  />
)

export default Hit
