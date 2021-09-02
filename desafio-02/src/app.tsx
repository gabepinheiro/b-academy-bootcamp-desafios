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
    title: 'JavaScript',
    content: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
    slug: 'article-javascript'
  },
  {
    id: 2,
    title: 'React',
    content: 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.',
    slug: 'article-react'
  },
  {
    id: 3,
    title: 'TypeScript',
    content: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
    slug: 'article-typescript'
  },
  {
    id: 4,
    title: 'Node.js',
    content: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
    slug: 'article-nodejs'
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