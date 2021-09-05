import { H2 } from "../heading"
import { Item, List, Wrapper } from "./styles"

function Sidebar({ articles, setTitle, setContent }){
  function handleClick(e, { title, content }) {
    e.preventDefault()

    setTitle(title)
    setContent(content)
  }

  return (
    <Wrapper>
      <H2 children="Sidebar" />
      <List>
        {articles.map(article => (
          <Item key={article.title}>
            <a
              href={`article/${article.slug}`}
              onClick={(e) => handleClick(e, article)}
            >
              {article.title}
            </a>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

export default Sidebar