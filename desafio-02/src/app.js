import { useState } from 'react'

import Container from "./container"
import ContainerFlex from "./container-flex"
import Content from "./content"
import FlexItem from "./flex-item"
import Footer from "./footer"
import Header from "./header"
import Menu from "./menu"
import Sidebar from "./sidebar"

const articles = [
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

function App(){
  const [title, setTitle] = useState(articles[0].title)
  const [content, setContent] = useState(articles[0].content)

  const changeArticle = (title, content) => {
    setTitle(title)
    setContent(content)
  }

  return (
    <Container>
      <ContainerFlex flexDirection="column">
        <Header />
        <Menu />

      <FlexItem flexGrow="1">
        <ContainerFlex>
          <Sidebar 
            articles={articles}
            changeArticle={changeArticle}
          />
          <FlexItem flexGrow="1">
            <Content title={title} content={content} />
          </FlexItem>
        </ContainerFlex>
      </FlexItem>  

        <Footer />
      </ContainerFlex>
    </Container>
  )
}

export default App