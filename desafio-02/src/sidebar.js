import { H2 } from "./heading"

function Sidebar({ articles, changeArticle }){
  function handleClick(e, { title, content }) {
    e.preventDefault()

    changeArticle(title, content)
  }

  return (
    <aside className="sidebar">
      <H2 children="Sidebar" />
      <ul>
        {articles.map(article => (
          <li>
            <a
              key={article.title}
              href={`article/${article.slug}`}
              onClick={(e) => handleClick(e, article)}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar