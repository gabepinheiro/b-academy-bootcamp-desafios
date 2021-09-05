function FlexItem({children, flexGrow}){
  return (
    <div className={`flex-item ${!!flexGrow && 'flex-grow'}`}>
      {children}
    </div>
  )
}

export default FlexItem