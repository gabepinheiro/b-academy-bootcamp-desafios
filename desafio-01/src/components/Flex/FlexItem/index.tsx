type FlexItemProps = {
  children: React.ReactNode
  flexGrow?: string
}

const FlexItem = ({ children, flexGrow }: FlexItemProps) => (
  <div className={`flex-item flex-grow${flexGrow}`}>
    {children}
  </div>
)

export default FlexItem