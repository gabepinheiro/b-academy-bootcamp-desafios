import { MessageState } from "../../app"
import Button from "../button"
import { Wrapper } from "./styles"

export type MessageProps = {
  children: React.ReactNode
  status: string
  setMessage: React.Dispatch<React.SetStateAction<MessageState>>
}

const Message = ({ children, status, setMessage}: MessageProps) => {
  const handleClick = () => {
    setMessage(prev => ({...prev, show: false}))
  } 

  return (
    <Wrapper status={status}>
      {children}
      <Button onClick={handleClick}>OK</Button>
    </Wrapper>
  )
}

export default Message