import { Article } from "../../app"
import FlexContainer from "../Flex/FlexContainer"
import { H2 } from "../Heading"
import Link from "../Link"

type SidebarProps = {
  articles: Article[]
  setTitle: (title: string) => void
  setContent: (content: string) => void 
}

const Sidebar = ({ articles, setTitle, setContent }: SidebarProps) => {
  const handleClick = (e: React.MouseEvent, {title, content}: Article) => {
    e.preventDefault()

    setTitle(title)
    setContent(content)
  }

 return (
    <aside>
        <H2>Articles</H2>

        <FlexContainer flexDirection="column" gap={16}>
          {articles.map(article => (
            <Link 
              key={article.title}
              href={`article/${article.slug}`}
              onClick={(e) => handleClick(e, article)}
            >
              {article.title}
            </Link>
          ))}
        </FlexContainer>
    </aside>
  )
}

export default Sidebar