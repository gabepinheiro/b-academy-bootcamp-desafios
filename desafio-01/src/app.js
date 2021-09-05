import Container from "./container"
import ContainerFlex from "./container-flex"
import Content from "./content"
import FlexItem from "./flex-item"
import Footer from "./footer"
import Header from "./header"
import Menu from "./menu"
import Sidebar from "./sidebar"

function App(){
  return (
    <Container>
      <ContainerFlex flexDirection="column">
        <Header />
        <Menu />

        <ContainerFlex>
          <Sidebar />
          <FlexItem flexGrow="1">
            <Content />
          </FlexItem>
        </ContainerFlex>

        <Footer />
      </ContainerFlex>
    </Container>
  )
}

export default App