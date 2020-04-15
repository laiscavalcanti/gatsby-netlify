import styled from "styled-components"

export const SideBarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borderSideBar);
  background-color: var(--backgroundSideBar);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 22rem;
`
export const AvatarItem = styled.section`
  margin-top: 2rem;
`
export const LogoItem = styled.section`
  margin-bottom: 3rem;
  margin-top: 2rem;
`
export const SocialLinksItem = styled.section`
  margin-bottom: 2rem;
`
