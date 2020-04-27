import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PostItemLink = styled(AniLink)`
  display: flex;
  padding: 1rem 15rem 0 15rem;
  width: 100%;
  color: var(--black);
`
export const PostItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 3.5rem 1rem;
  width: 100%;
  align-items: center;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: row;
    padding: 1rem;
  `}
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
  margin-left: 2rem;
  font-family: "Montserrat", sans-serif;
  ${media.lessThan("large")`
  margin-left: 0.8rem;
  `}

  &:hover {
    opacity: 0.8;
    color: var(--backgroundHoverPostItem);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const PostItemImg = styled(Img)`
  display: flex;
  justify-content: center;
  min-height: 9rem;
  min-width: 9rem;
  ${media.lessThan("large")`
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
  min-height: 4.5rem;
  min-width: 4.5rem;
  `}
  &:hover {
    min-height: 11rem;
    min-width: 11rem;
  }
`
export const PostItemTitle = styled.h1`
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.9rem 0rem 0.9rem 0.5rem;
  opacity: 0.9;
  ${media.lessThan("large")`
    font-size: 1rem;
    line-height: 1.2;
  `}
`
export const PostItemDate = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 1.5rem 0.5rem 0rem 0.5rem;
  font-size: 0.7rem;
  opacity: 0.8;
  ${media.lessThan("large")`
    font-size: 0.6rem;
    margin: 0.8rem 0.5rem 0rem 0.5rem;
  `}
`
export const PostItemDescription = styled.p`
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
  ${media.lessThan("large")`
    font-size: 0.8rem;
  `}
`
