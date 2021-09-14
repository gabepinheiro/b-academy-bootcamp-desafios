
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
    <div className={`message ${status}`}>
      {children}
      <button onClick={handleClick}>OK</button>
    </div>
  )
}

export default Message