import { Article } from "../../app"
import FlexContainer from "../Flex/FlexContainer"
import { H2 } from "../Heading"
import Link from "../Link"

type SidebarProps = {
  articles: Article[]
}

const Sidebar = ({ articles }: SidebarProps) => (
  <aside>
      <H2>Artigos</H2>

      <FlexContainer flexDirection="column" gap={16}>
        {articles.map(article => (
          <Link 
            key={article.title}
            href={`article/${article.slug}`}
          >
            {article.title}
          </Link>
        ))}
      </FlexContainer>
  </aside>
)

export default Sidebar