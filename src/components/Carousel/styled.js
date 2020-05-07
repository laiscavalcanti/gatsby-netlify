import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const CarouselWrapper = styled.section`
  display: flex;
  width: 100%;
  .swiper-container {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    z-index: 0;
  }

  .slideshow {
    text-align: left;
    width: 100%;
    color: black;
    padding: 0;

    .swiper-container img {
      width: 100%;
    }

    .swiper-pagination {
      .swiper-pagination-bullet {
        background: transparent !important;
        width: auto;
        opacity: 0.5;

        &:focus {
          outline: none;
        }
        &:before {
          cursor: pointer;
          margin: 0 8px 0 0;
          display: inline-block;
          width: 20px;
          font-size: 50px;
          color: var(--black);
        }

        &:first-child:before {
          content: "◦";
        }
        &:nth-child(2):before {
          content: "◦";
        }
        &:nth-child(3):before {
          content: "◦";
        }
        &:nth-child(4):before {
          content: "◦";
        }
        &:nth-child(5):before {
          content: "◦";
        }
        &:nth-child(6):before {
          content: "⚪";
        }
        &:nth-child(7):before {
          content: "⚪";
        }
      }
      .swiper-pagination-bullet-active {
        margin: 0 30px 0 0;
        position: relative;
        opacity: 1;

        &:after {
          content: "";

          width: 30px;
          position: absolute;
          left: 25px;
          top: 26px;
        }
        &:last-child {
          margin: 0 8px 0 0;
          &:after {
            display: none;
          }
        }
      }
    }
  }
`
export const CarouselLink = styled(Link)`
  display: flex;
  width: 100%;
  color: var(--black);
  padding: 1rem 0rem 3rem 0rem;
`
export const CarouselImage = styled(Img)`
  display: flex;
  width: 60%;
  height: 30rem;
`

export const CarouselInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 3rem 0 0 0;
  width: 40%;
  font-family: "Montserrat", sans-serif;
  &:hover {
    color: var(--backgroundHoverPostItem);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const CarouselDate = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 1rem 0 0 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  opacity: 0.7;
  &:hover {
    color: var(--backgroundHoverPostItem);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const CarouselTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 2.5rem 1rem 0rem 1rem;
  width: 30rem;
  text-align: center;
  font-family: "Merriweather", serif;
  line-height: 1.3;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 50px;
`
export const CarouselAuthor = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 2rem 0 0 0;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  opacity: 0.7;
`
export const CarouselDescription = styled.span`
  display: flex;
  margin: 2rem 1rem 0rem 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
`
