import React from "react"

import * as S from "./styled"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Configure } from "react-instantsearch-dom"

import Hit from "./Hit"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
      <Hits hitComponent={Hit} />
      <Configure hitsPerPage={10} />
    </InstantSearch>
  </S.SearchWrapper>
)
export default Search
