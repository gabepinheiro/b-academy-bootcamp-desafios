import styled from 'styled-components'

export const Wrapper = styled.table`
  width:100%;

  th {
    height: 40px;
    padding: 0 8px;
  }

  td:not(:last-of-type) {
    text-align: center;
    background-color: black;
    color: white
  }

  th:not(:last-of-type) {
    background-color: #f36;
  }
`