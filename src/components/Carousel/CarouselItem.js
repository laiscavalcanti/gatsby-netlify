import React from "react"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import "moment/locale/fr"
import { Link } from "gatsby"

const NewCarouselItem = ({ markdownRemark }) => {
  let imgFluid = null
  if (markdownRemark !== undefined) {
    imgFluid = markdownRemark.frontmatter.image.childImageSharp.fluid
  }

  return (
    <>
      <Img fluid={imgFluid} style={{ height: "100%" }} />
      <StyledInfoContainer className="carousel-link" to={markdownRemark.fields.slug}>
        <StyledTitle className="carousel-link__title">{markdownRemark.frontmatter.title}</StyledTitle>
      </StyledInfoContainer>
    </>
  )
}

const StyledInfoContainer = styled(Link)`
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
`
const StyledTitle = styled.h1`
  font-weight: normal;
  opacity: 0;
`

export default NewCarouselItem
