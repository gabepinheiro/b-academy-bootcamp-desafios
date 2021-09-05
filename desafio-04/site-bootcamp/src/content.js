import Button from "./button"
import { H2 } from "./heading"

function Content({ title, content }){
  return (
    <main className="content">
      <article>
        <H2 children={title}/>
        <p>{content}</p>
        <Button kind="primary">More</Button>
        <Button kind="secondary">More</Button>
      </article>
    </main>
  )
}

export default Content