import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PostItemLink = styled(AniLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem 2rem 3.5rem;
  width: 100%;
  color: var(--black);
`
export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: row;
    padding: 1rem;
  `}
`
export const PostItemInfo = styled.div`
  align-items: flex-start;
  max-width: 30rem;
  margin: 0 0 0 1rem;
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
  height: 10rem;
  width: 22.5rem;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  ${media.lessThan("large")`
    display: flex;
    margin-left: 1rem;
    min-height: 4.5rem;
    min-width: 4.5rem;
  `}
`
export const PostItemTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-family: "Merriweather", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.9rem 0rem 0.9rem 0rem;
  ${media.lessThan("large")`
    font-size: 1rem;
    line-height: 1.2;
  `}
`
export const PostItemAuthor = styled.p`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.7rem;
  opacity: 0.8;
`
export const PostItemDate = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 1.5rem 0.5rem 0rem 0rem;
  font-size: 0.7rem;
  ${media.lessThan("large")`
    font-size: 0.6rem;
    margin: 0.8rem 0.5rem 0rem 0.5rem;
  `}
`
export const PostItemDescription = styled.p`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  margin: 0.8rem 0 0 0;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
  ${media.lessThan("large")`
    font-size: 0.8rem;
  `}
`
