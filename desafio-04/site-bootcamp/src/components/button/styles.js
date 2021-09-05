import styled from 'styled-components'

export const Wrapper = styled.button`
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  background: ${(props) => props.kind === 'primary' ? '#f36' : '#000'};
  color: #fff;

  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`