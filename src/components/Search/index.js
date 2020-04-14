import React from "react"

import Hit from "./Hit"
import * as S from "./styled"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Stats, SearchBox, Hits } from "react-instantsearch-dom"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (

  <InstantSearch
    searchClient={searchClient}
    indexName={algolia.indexName}
    >
    <Stats />

    <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
    <Hits hitComponent={Hit} />
  </InstantSearch>

)
export default Search