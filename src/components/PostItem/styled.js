import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

export const PostItemLink = styled(AniLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--black);
`
export const PostItemWrapper = styled.div`
  display: flex;
  padding: 0rem 3.5rem 1rem;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--borders);
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
  margin-left: 2rem;
  &:hover {
    opacity: 0.8;
    color: var(--backgroundHoverPostItem);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const PostItemImg = styled(Img)`
  display: flex;
  justify-content: center;
  margin-left: 2rem;
  margin-top: 2rem;
  border-radius: 50%;
  min-height: 7rem;
  min-width: 7rem;
  &:hover {
    min-height: 8rem;
    min-width: 8rem;
  }
`
export const PostItemTitle = styled.h1`
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.9rem 0rem 0.9rem 0.5rem;
  opacity: 0.9;
`
export const PostItemDate = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0.5rem 0rem 0.5rem;
  font-size: 0.7rem;
  opacity: 0.8;
`
export const PostItemDescription = styled.p`
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
`
