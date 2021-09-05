import { Wrapper } from './styles'

function Button({children, kind}){
  return (
    <Wrapper kind={kind}>{children}</Wrapper>
  )
}

export default Button