import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1rem 0rem;
  margin-left: 16rem;
  max-width: 48.4rem;
  ${media.lessThan("large")`
  margin: 0.5rem 1rem 1rem 1rem;
    padding: 1rem 0 0;
    max-width: 100%;
  `}
`
export const PostTag = styled(Link)`
  display: flex;
  align-items: flex-end;
  margin-top: 0.2rem;
  color: var(--black);
  text-decoration: none;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  opacity: 0.8;
  &:hover {
    color: var(--black);
  }
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
  ${media.lessThan("large")`
    opacity: 1;
    font-size: 0.95rem;
  `}
`
export const PostTitle = styled.h1`
  text-align: end;
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0 1rem 0 1rem;
  font-family: "Merriweather", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  color: var(--black);
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
    text-align: start;
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
    font-size: 1.7rem;
    margin: 1rem 0 1rem  0;  `}
`
export const PostDescription = styled.h2`
  margin: 1.2rem 0.5rem 0 0.5rem;
  padding: 0 1rem 0 1rem;
  letter-spacing: 0rem;
  font-weight: 100;
  line-height: 1.5;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-style: italic;
  text-align: end;
  color: var(--black);
  opacity: 0.8;
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
    margin: 0rem;
    text-align: start;
    opacity: 1;
    font-size: 0.9rem;
  `}
`
export const PostDate = styled.p`
  margin: 0.4rem 0.5rem 0 0.5rem;
  padding: 0 1rem 0 0rem;
  color: var(--black);
  font-size: 0.9rem;
  font-weight: 100;
  font-family: "Montserrat", sans-serif;
  margin: 1rem 1rem 0 1rem;
  text-align: end;
  opacity: 0.7;
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
    opacity: 1;
    text-align: start;
    margin: 0;
    padding: 0.5rem;
    font-size: 0.7rem;
    margin-left: 1rem;
  `}
`
export const IconWrapper = styled.div`
  display: flex;
  margin: 2rem 3rem 0 1rem;
  padding-left: 2rem;
  color: var(--white);
  opacity: 0.6;
  ${media.lessThan("large")`
   margin: 1rem 1rem 0 0;
   padding: 1rem 0 0 1rem;
  `};
`
export const Icon = styled.div`
  margin-right: 0.5rem;
  width: 25px;
  height: 25px;
  color: var(--black);
  opacity: 0.7;
  cursor: pointer;
  ${media.lessThan("large")`
  width: 25px;
  height: 25px;
  `}
`
export const IconArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 65rem;
  padding: 1rem 0.5rem 2rem 18rem;
`
export const MainContent = styled.article`
  max-width: 64.5rem;
  padding: 1rem 0rem 2rem 18rem;
  text-align: justify;
  ${media.lessThan("large")`
    padding: 0;
    padding: 2rem 0;
    max-width: 100%;
    margin: 0 0.5rem 0 0.5rem;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    font-family: "Montserrat", sans-serif;
    color: var(--texts);
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
    letter-spacing: 0.005rem;
    padding: 0 1.4rem;
    &::selection {
      color: var(--colorSelection);
      background: var(--backgroundSelection);
    }

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: #fff;
    border-left: 0.3rem solid #1fa1f2;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
