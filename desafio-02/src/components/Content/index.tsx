import { H2 } from "../Heading"

type ContentProps = {
  title: string
  content: React.ReactNode
}

const Content = ({ title, content }: ContentProps) => (
  <main>
    <H2 children={title} />

    <p>{content}</p>     
  </main>
)

export default Content