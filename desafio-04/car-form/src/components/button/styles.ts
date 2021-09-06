import styled from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'>

export const Wrapper = styled.button<WrapperProps>`
  padding: .5rem 1rem;
  border:0;
  border-radius: 5px;
  background-color: #f36;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
}
`

