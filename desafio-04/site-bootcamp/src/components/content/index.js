import Button from "../button"
import { H2 } from "../heading"
import { Post, Wrapper, WrapperButtons } from "./styles"

function Content({ title, content }){
  return (
    <Wrapper>
      <Post>
        <H2 children={title}/>
        <p>{content}</p>

        <WrapperButtons>
          <Button kind="primary">More</Button>
          <Button kind="secondary">More</Button>
        </WrapperButtons>
      </Post>
    </Wrapper>
  )
}

export default Content