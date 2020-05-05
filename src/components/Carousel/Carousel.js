import React, { useState, useEffect } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import NewCarouselItem from "./CarouselItem"

const NewCarousel = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [isCenterMode, setIsCenterMode] = useState(true)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth))
    if (screenWidth < 768) {
      setIsCenterMode(false)
    } else {
      setIsCenterMode(true)
    }
  }, [screenWidth])

  const posts = useStaticQuery(graphql`
    query {
      markdownRemark {
        fields {
          slug
        }
        frontmatter {
          title
          author
          description
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const postsCarousel = posts.markdownRemark.edges

  const carouselByLang = postsCarousel.filter(carousel => {
    const lang = carousel.fields[0].slug
    return lang === "fr"
  })

  const carouselItems = carouselByLang.map((carousel, index) => {
    return <NewCarouselItem carousel={carousel.node} key={index} />
  })

  return (
    <>
      <StyledContainer>
        <StyledCarousel
          showArrows={false}
          showStatus={false}
          centerMode={isCenterMode}
          centerSlidePercentage={70}
          emulateTouch
        >
          {carouselItems}
        </StyledCarousel>
      </StyledContainer>
    </>
  )
}

const ToFullSizeSm = keyframes`
to {
  width: 188px;
  height 70px;
}
`

const fadeIn = keyframes`
to {
  opacity: 1;
}
`
const StyledContainer = styled.div`
  margin: 250px auto 0;
`
const StyledCarousel = styled(Carousel)`
  margin: 100px auto 0;
  overflow: visible;
  .slider-wrapper {
    height: 250px;
    .slider {
      display: flex;
      align-items: center;
      .slide {
        height: 250px;
        background-color: transparent;
        transition: height 0.4s;
        &:first-child {
          &.selected {
          }
        }
        &:last-child {
          &.selected {
          }
        }
        &.selected {
          .carousel-link {
            animation: ${ToFullSizeSm} 0.4s forwards;

            &__title {
              animation: ${fadeIn} 0.2s 0.4s forwards;
            }
            &__date {
              animation: ${fadeIn} 0.4s 0.4s forwards;
            }
          }
        }
        &:not(.selected) {
        }
      }
    }
  }
  .control-dots {
    position: relative;
    margin: 60px 0 0 0;
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: blue;
      box-shadow: none;
      margin: 0 12px;
      &.selected {
        background-color: black;
        transform: scale(2);
        outline: none;
      }
    }
  }
`
export default NewCarousel
