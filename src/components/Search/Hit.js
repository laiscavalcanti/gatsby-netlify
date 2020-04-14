import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (

    <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
      tags={hit.tags}
    />
  )

export default Hit
