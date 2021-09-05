import { Wrapper } from "./styles"

function FlexItem({children, flexGrow}){
  return (
    <Wrapper flexGrow={flexGrow}>
      {children}
    </Wrapper>
  )
}

export default FlexItem