import Button from "./components/Button";
import Container from "./components/Container";
import Content from "./components/Content";
import FlexContainer from "./components/Flex/FlexContainer";
import FlexItem from "./components/Flex/FlexItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { H2 } from "./components/Heading";
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
        <Button kind="secondary">Sign in</Button>
      </Navigation>
    </Menu>

      <FlexItem flexGrow="1">
        <FlexContainer>
          <FlexItem>
            <Sidebar>
              <H2 children="Lorem" />
              <p>
                dolor sit amet consectetur adipisicing elit. Nostrum, recusandae ea. Inventore suscipit animi porro accusantium delectus, autem facere consequuntur rem. Facilis, velit! Ea, hic ad laboriosam totam dolorem culpa.
              </p>
              <Button kind="primary">More</Button>
            </Sidebar>
          </FlexItem>
          <FlexItem>
            <Content>
              <H2 children="Lorem"/>
              <p>
                dolor sit amet consectetur adipisicing elit. Nostrum, recusandae ea. Inventore suscipit animi porro accusantium delectus, autem facere consequuntur rem. Facilis, velit! Ea, hic ad laboriosam totam dolorem culpa.
              </p>
              <Button kind="secondary">More</Button>
            </Content>
        </FlexItem>
        </FlexContainer>
      </FlexItem>
    <Footer>
      <p>Brainn</p>
    </Footer>
  </Container>
)

export default App