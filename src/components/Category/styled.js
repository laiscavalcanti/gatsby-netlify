import styled from 'styled-components'
//import { Tag } from 'styled-icons/boxicons-regular/Tag'

export const Tags = styled.div`
  align-items: center;
  color: green;
  display: flex;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const TagHolder = styled.span`
  align-items: center;
  display: inline-flex;
  > a {
    align-items: center;
    color: green;
    display: inline-flex;
    transition: color 0.5rem;
    will-change: color;
    &:not(:last-child) {
      margin-right: 1rem;
    }
    &:hover,
    &:focus {
      color: black;
    }
  }
  &:not(:last-child) {
    margin-right: 1rem;
    &:after {
      content: ', ';
      height: 3rem;
    }
  }
`

export const TagItem = styled.span`
  align-items: center;
  display: inline-flex;
  font-size: 1.3rem;
  letter-spacing: .1rem;
  text-transform: lowercase;
  vertical-align: top;
`

/*export const TagIcon = styled.div`
  display: block;
  margin-right: 1rem;
  width:20rem;
`*/