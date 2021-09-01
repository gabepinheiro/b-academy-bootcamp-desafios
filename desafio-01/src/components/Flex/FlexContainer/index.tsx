type FlexContainerProps = {
  children: React.ReactNode
}

const FlexContainer = ({ children }: FlexContainerProps) => (
  <div className="flex-container">
    {children}
  </div>
)

export default FlexContainer