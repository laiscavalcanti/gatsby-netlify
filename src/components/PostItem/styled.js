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
  ${media.lessThan("large")`
  padding: 0.5rem 0 1rem 1rem;
  margin-top: 2rem;
`}
`
export const PostItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.lessThan("large")`

  `}
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 30rem;
  margin: 0 0 0 1rem;
  font-family: "Montserrat", sans-serif;
  ${media.lessThan("large")`
  display: flex;
  flex-direction: column;
    margin: 0rem 0.5rem 0 1rem;
  `}

  &:hover {
    color: var(--backgroundSelection);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const PostItemImg = styled(Img)`
  display: flex;
  height: 10rem;
  width: 22.5rem;
  -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover img {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  ${media.lessThan("large")`
    min-height: 5rem;
    min-width: 10.5rem;
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
    line-height: 1.1;
    margin: 0.1rem 0rem 0.6rem 0rem;
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
  ${media.lessThan("large")`
  font-size: 0.5rem;
  `}
`
export const PostItemDate = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0.5rem 0rem 0rem;
  font-size: 0.7rem;
  ${media.lessThan("large")`
    display: none;
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
    margin: 0.5rem 0 0 0;
  `}
`
