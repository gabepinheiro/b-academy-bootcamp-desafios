function ContainerFlex({children, flexDirection}){
  return (
    <div className={`container-flex ${flexDirection}`}>
        {children}
    </div>
  )
}

export default ContainerFlex