import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const CarouselWrapper = styled.section`
  display: flex;
  width: 100%;
  .swiper-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 18px;
    justify-content: center;
    align-items: center;
  }
  .slideshow {
    text-align: left;
    width: 100%;
    color: black;
    padding: 0;

    h1.carousel-desc {
      color: black;
      font-size: 22px;
      line-height: 30px;
      font-weight: 600;
      margin: 0;
    }

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
          font-size: 14px;
        }

        &:first-child:before {
          content: "01";
        }
        &:nth-child(2):before {
          content: "02";
        }
        &:nth-child(3):before {
          content: "03";
        }
        &:nth-child(4):before {
          content: "04";
        }
        &:nth-child(5):before {
          content: "05";
        }
        &:nth-child(6):before {
          content: "06";
        }
        &:nth-child(7):before {
          content: "07";
        }
      }
      .swiper-pagination-bullet-active {
        margin: 0 50px 0 0;
        position: relative;
        opacity: 1;

        &:after {
          content: "";
          border-bottom: 1px solid #fff;
          width: 50px;
          position: absolute;
          left: 25px;
          top: 11px;
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
export const CarouselImage = styled(Img)`
  display: flex;
  width: 60rem;
  height: 30rem;
`

export const CarouselInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 1rem 0 0 0;
  font-family: "Montserrat", sans-serif;
  &:hover {
    color: var(--backgroundHoverPostItem);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const CarouselTitle = styled.h1`
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
  margin: 2rem 1rem 0rem 2.5rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
`
