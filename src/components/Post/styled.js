import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostHeader = styled.header`
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
  ${media.lessThan("large")`
  margin-top: 2rem;
    padding: 5rem 0 0;
    max-width: 100%;
  `}
`
export const PostTag = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  color: var(--black);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
  &:hover {
    color: var(--backgroundHoverPostItem);
  }
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
  ${media.lessThan("large")`
    opacity: 1;
    font-size: 0.75rem;
  `}
`
export const PostTitle = styled.h1`
  padding: 0rem 4rem;
  margin: 2rem 4rem 2rem 0;
  text-align: end;
  font-family: "Merriweather", serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--black);
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
  ${media.lessThan("large")`
    text-align: start;
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
    font-size: 1.5rem;
  `}
`
export const PostDescription = styled.h2`
  margin-right: 4rem;
  padding: 0rem 4rem;
  letter-spacing: 0rem;
  font-weight: 100;
  line-height: 1.5;
  font-family: "Merriweather", sans-serif;
  font-size: 1rem;
  font-style: italic;
  text-align: end;
  color: var(--black);
  opacity: 0.8;
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
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
  color: var(--black);
  font-size: 0.9rem;
  font-weight: 100;
  font-family: "Merriweather", sans-serif;
  padding: 0rem 4rem;
  margin-right: 4rem;
  text-align: end;
  opacity: 0.7;
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
  ${media.lessThan("large")`
    opacity: 1;
    text-align: start;
    margin: 0;
    padding: 0 1rem;
    font-size: 0.7rem;
  `}
`
export const IconWrapper = styled.div`
  display: flex;
  padding: 0rem 4rem;
  margin: 2rem 4rem 0 0;
  color: var(--white);
  ${media.lessThan("large")`
   margin: 1rem 1rem 0 0;
   padding: 1rem 0 0 1rem;
  `}
`
export const Icon = styled.div`
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
  color: var(--black);
  opacity: 0.7;
  ${media.lessThan("large")`
    opacity: 1;
    width: 15px;
    height: 15px;
  `}
`
export const MainContent = styled.article`
  margin-right: 4rem;
  max-width: 70rem;
  padding: 3rem 7rem;
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
      color: var(--white);
      background: var(--backgroundHoverPostItem);
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
