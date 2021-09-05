import { Item, List, Wrapper } from "./styles"

function Menu(){
  return (
    <Wrapper>
        <List>
          <Item><a href="/">Home</a></Item>
          <Item><a href="/">About</a></Item>
          <Item><a href="/">Contact</a></Item>
        </List>
    </Wrapper>
  )
}

export default Menu