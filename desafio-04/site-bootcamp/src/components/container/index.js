import { Wrapper } from "./styles"

function Container({children}){
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container