import { MessageState } from "../../App"

type MessageProps = {
  children: React.ReactNode
  status: string
  setMessage: React.Dispatch<React.SetStateAction<MessageState>>
}

const Message = ({ children, status, setMessage}: MessageProps) => {
  const handleClick = () => {
    setMessage(prev => ({...prev, show: false}))
  } 

  return (
    <div className={`message ${status}`}>
      {children}
      <button onClick={handleClick}>OK</button>
    </div>
  )
}

export default Message