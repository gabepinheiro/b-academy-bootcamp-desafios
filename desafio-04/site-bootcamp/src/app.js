import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import Container from "./components/container"
import ContainerFlex from "./components/container-flex"
import FlexItem from "./components/flex-item"
import Header from "./components/header"
import Menu from "./components/menu"
import Sidebar from "./components/sidebar"
import Content from "./components/content"
import Footer from "./components/footer"

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, #root {
  width:100%;
  height: 100vh;
}
`

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

  return (
    <>
      <GlobalStyle />
      <Container>
        <ContainerFlex flexDirection="column">
          <Header />
          <Menu />

        <FlexItem flexGrow="1">
          <ContainerFlex>
            <Sidebar 
              articles={articles}
              setTitle={setTitle}
              setContent={setContent}
            />
            <FlexItem flexGrow="1">
              <Content title={title} content={content} />
            </FlexItem>
          </ContainerFlex>
        </FlexItem>  

          <Footer />
        </ContainerFlex>
      </Container>
    </>
  )
}

export default App