import styled from "styled-components"


export const ProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
	flex-direction: column;

`
export const ProfileWrapper = styled.section`

`
export const ProfileAuthor = styled.section`
    font-size: 0.9rem;
    font-weight:700;
    font-family: 'Inconsolata', sans-serif;
    color: #000723;
    letter-spacing: 0.1rem;
`


export const ProfileDescription = styled.p `
	position:relative;
    font-family: 'Inconsolata', sans-serif;
    letter-spacing: 0rem;
	font-size: 0.8rem;
	opacity: 0.7;
	font-style: oblique;
	text-align: center;
	line-height: 1.6;
	margin-top: 0.6rem;
    color: #000723;
`