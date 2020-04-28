import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const FeaturedLink = styled(Link)`
  display: flex;
  width: 100%;
  color: var(--black);
`
export const WrapperFeatured = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`
export const FeaturedImage = styled(Img)`
  display: flex;
  width: 60rem;
  height: 30rem;
`
export const FeaturedTitle = styled.p`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 0.9rem 0rem 0.9rem 0rem;
  opacity: 0.9;
`
export const FeaturedDescription = styled.p`
  font-size: 2rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
`
