import { H1 } from "../heading"
import { Wrapper } from "./styles"

import Logo from '../logo'

function Header(){
  return (
    <Wrapper>
        <H1>
          <Logo width="50px" height="50px" />
        </H1>
    </Wrapper>
  )
}

export default Header