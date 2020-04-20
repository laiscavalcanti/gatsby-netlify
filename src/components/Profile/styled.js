import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const ProfileAuthor = styled.section`
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
