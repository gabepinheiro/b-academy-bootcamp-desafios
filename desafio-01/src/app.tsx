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

const App = () => (
  <Container>
    <Header>
      <Logo />
    </Header>

    <Menu>
      <Navigation>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </Navigation>
    </Menu>

    <FlexItem flexGrow="1">
      <FlexContainer>
        <FlexItem>
          <Sidebar>
            <h2>Sidebar</h2>
          </Sidebar>
        </FlexItem>
        <FlexItem flexGrow="1">
          <Content>
            <h2>Content</h2>
          </Content>
        </FlexItem>
      </FlexContainer>
    </FlexItem>
    
    <Footer>
      <h2>Footer</h2>
    </Footer>
  </Container>
)

export default App