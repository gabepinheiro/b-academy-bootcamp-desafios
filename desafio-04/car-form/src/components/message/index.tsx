import Button from "../button"
import { Wrapper } from "./styles"

export type MessageProps = {
  children: React.ReactNode
  text?: string
  show?: boolean 
  status?: string
  isShowMessage:(show: boolean) => void
  
}

const Message = ({ children, status, isShowMessage }: MessageProps) => {
  const handleClick = () => {
    isShowMessage(false)
  } 

  return (
    <Wrapper status={status}>
      {children}
      <Button onClick={handleClick}>OK</Button>
    </Wrapper>
  )
}

export default Message