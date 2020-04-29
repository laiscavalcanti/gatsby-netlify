import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const FeaturedLink = styled(Link)`
  display: flex;
  width: 100%;
  color: var(--black);
  padding: 1rem 0rem 1rem 0rem;
`
export const WrapperFeatured = styled.section`
  display: flex;
  width: 100%;
`
export const FeaturedDate = styled.p`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem 3rem 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
  font-family: "Montserrat", sans-serif, bold;
`
export const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 1rem 0 0 0;
  font-family: "Montserrat", sans-serif;
`
export const FeaturedImage = styled(Img)`
  display: flex;
  width: 90rem;
  height: 30rem;
`
export const FeaturedTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 4rem 1rem 0rem 0rem;
  width: 30rem;
  text-align: center;
  font-family: "Merriweather", serif;
  line-height: 1.3;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 50px;
`
export const FeaturedAuthor = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 2rem 0 0 0;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  opacity: 0.7;
`
export const FeaturedDescription = styled.h2`
  display: flex;
  margin: 2rem 1rem 0rem 2.5rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
`
