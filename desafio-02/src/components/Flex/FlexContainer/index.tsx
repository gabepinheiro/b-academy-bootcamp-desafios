type FlexContainerProps = {
  children: React.ReactNode
  flexDirection?: string
  gap?: number
}

const FlexContainer = ({ children, flexDirection = 'row', gap = 8 }: FlexContainerProps) => (
  <div className={`flex-container ${flexDirection} gap-${gap}`} >
    {children}
  </div>
)

export default FlexContainer