import styled from 'styled-components'
import { MessageProps } from '.'

type WrapperProps = Pick<MessageProps, 'status'>

export const Wrapper = styled.div<WrapperProps>`
  padding: 8px 1rem;
  border: 1px solid #eee;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top:5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: bold;

  color: ${({ status }) => 
    status === 'success' ? 'green' : 'red'
  }
`