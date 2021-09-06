import React from "react"
import { Wrapper } from "./styles"

export type ButtonProps = {
  children: React.ReactNode
  type?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ children, type = "click", ...rest }: ButtonProps){
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  )
}

export default Button