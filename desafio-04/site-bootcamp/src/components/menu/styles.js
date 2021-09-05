import styled from 'styled-components'

export const Wrapper = styled.nav`
  height: 80px;
  background: #f36;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`

export const Item = styled.li`
  a {
    color: white;
    text-decoration: none;
    padding: .5rem 1rem;
    border-radius:5px;
    font-weight: bold;
  }

  a:hover {
    background:black;
    opacity: .6;
  }
`