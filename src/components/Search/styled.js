import styled from "styled-components"


export const SearchWrapper = styled.section`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
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
  body#grid & {
    .ais-Hits-list {
      background-color: orange;
      border-bottom: 1px solid orange;
      border-top: 1px solid white;
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      margin-top: 2rem;
    }
    .ais-Hits-item {
      background-color: lightgreen;
    }
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid pink;
    color: blue;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: lightgrey;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`