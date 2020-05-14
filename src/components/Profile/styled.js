import styled from "styled-components"
import media from "styled-media-query"

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  ${media.lessThan("large")`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  `}
`
export const ContainerLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 0.8rem;
  ${media.lessThan("large")`
  width: 5rem;
  margin: 0 0rem 0 0rem;
  `}
`
export const ProfileAuthor = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.7rem;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: var(--sameColorWhite);
  letter-spacing: 0.1rem;
  ${media.lessThan("large")`
  margin-top: 0.5rem;
  margin-left: 0;
  font-size: 0.5rem;
  `}
  &::selection {
    color: var(--sameColorBlack);
    background-color: var(--sameColorWhite);
  }
`
export const ProfileDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  max-width: 22rem;
  margin-top: 0.4rem;
  margin-left: 0.5rem;
  text-align: left;
  letter-spacing: 0rem;
  font-size: 0.8rem;
  opacity: 0.7;
  font-style: oblique;
  line-height: 1.4;
  color: var(--sameColorWhite);
  &::selection {
    color: var(--sameColorBlack);
    background: var(--sameColorWhite);
  }

  ${media.lessThan("large")`
   display: none;
  `}
`
