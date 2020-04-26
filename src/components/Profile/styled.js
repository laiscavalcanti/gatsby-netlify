import styled from "styled-components"
import media from "styled-media-query"

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 20rem;
  ${media.lessThan("large")`
    display: none;
  `}
`
export const ProfileAuthor = styled.section`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: var(--colorSideBar);
  letter-spacing: 0.1rem;
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
export const ProfileDescription = styled.p`
  position: relative;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0rem;
  font-size: 0.8rem;
  opacity: 0.7;
  font-style: oblique;
  text-align: center;
  line-height: 1.6;
  margin-top: 0.6rem;
  color: var(--colorSideBar);
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
