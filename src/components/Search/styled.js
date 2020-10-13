import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    background-color: lightblue;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: black;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.6rem;
    width: 35rem;
    margin: 0 auto;
    font-family: "Roboto Slab", sans-serif;
    &::placeholder {
      color: var(--backgroundSelection);
    }
    ${media.lessThan("large")`
    font-size: 1.2rem;
    width: 18.5rem;
`}
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
