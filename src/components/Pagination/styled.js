import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: black;
  margin:0.5rem;
  display: flex;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  justify-content: space-between;
  align-content: flex-end;
    a{
        color: black;
        transition: color 0.5s;
        
        &:hover{
            color: #900020;
        }
    }
`