import styled from "styled-components"

export const SocialLinksWrapper = styled.div `
    display: flex;
    background-color: #f5f5f5;
`
export const SocialLinksList =styled.nav `
   display: flex;  
`
export const SocialLinksItem = styled.li `
    margin:1rem;
`
export const SocialLinksLink = styled.a`
    color: black;
    transition: color 0.5s;
    &:hover{
        color: #900020;
        transition: opacity 0.3s, transform 0.3s;
    }
`
export const IconWrapper = styled.div `
    fill: #bbb;
    width: 25px;
    height: 2px;
` 
