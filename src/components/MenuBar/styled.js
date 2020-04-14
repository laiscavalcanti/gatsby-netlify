import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 3.75rem;
    position: fixed;
    right: 0;
    padding: 0.8rem 0;
    border-left: 1px solid black;
    background-color: #900020;
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuBarLink = styled(Link)`
    display: block;
`
export const MenuBarItem = styled.span`
    display: block;
    position: relative;
    width: 3.5rem;
    height: 3.75rem;
    padding: 1.1rem;
    color: #f5f5f5;
    cursor: pointer;
`