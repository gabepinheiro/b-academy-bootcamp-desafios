import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Content from "./components/Content";
import FlexContainer from "./components/Flex/FlexContainer";
import FlexItem from "./components/Flex/FlexItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

export type Article  = {
  id: number
  title: string
  content: string
  slug: string
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Article 01',
    content: 'Article 01',
    slug: 'article-01'
  },
  {
    id: 2,
    title: 'Article 02',
    content: 'Article 02',
    slug: 'article-02'
  },
  {
    id: 3,
    title: 'Article 03',
    content: 'Article 03',
    slug: 'article-03'
  },
  {
    id: 4,
    title: 'Article 04',
    content: 'Article 04',
    slug: 'article-04'
  },
]

const App = () => {
  const [title, setTitle] = useState(articles[0].title)
  const [content, setContent] = useState(articles[0].content)

  return (
      <Container>
        <Header>
          <Logo />
        </Header>

        <Menu>
          <Navigation>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Button kind="secondary">Sign in</Button>
          </Navigation>
        </Menu>

          <FlexItem flexGrow="1">
            <FlexContainer>
              <Sidebar 
                articles={articles}
                setTitle={setTitle}
                setContent={setContent}/>

              <FlexItem>
                <Content title={title} content={content}/>
            </FlexItem>
            </FlexContainer>
          </FlexItem>
        <Footer>
          <p>Brainn</p>
        </Footer>
      </Container>
   )
}

export default App