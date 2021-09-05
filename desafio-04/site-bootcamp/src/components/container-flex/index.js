import { Wrapper } from "./styles"

function ContainerFlex({children, flexDirection}){
  return (
    <Wrapper flexDirection={flexDirection}>
        {children}
    </Wrapper>
  )
}

export default ContainerFlex