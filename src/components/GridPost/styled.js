import styled from "styled-components"
import media from "styled-media-query"

export const GridWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  margin-top: 1.2rem;
  ${media.lessThan("large")`
  margin-top: 1rem;
`}
`
export const Line = styled.div`
  border-top: 1px dashed var(--borders);
  margin: 0.5rem 2rem 0rem 2rem;
  ${media.lessThan("large")`
  margin: 0rem 2rem 0rem 2rem;
`}
`
