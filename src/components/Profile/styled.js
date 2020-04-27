import styled from "styled-components"
import media from "styled-media-query"

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: column;
`
export const ContainerLine = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.8rem;
`
export const ProfileAuthor = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
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
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0rem;
  font-size: 0.8rem;
  opacity: 0.7;
  font-style: oblique;
  text-align: center;
  line-height: 1.6;
  margin-top: 0.4rem;
  color: var(--colorSideBar);
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
