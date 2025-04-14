import { Text, Code, List } from "@chakra-ui/react";
import { GiUnlitBomb } from "react-icons/gi";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SidebarSwitch";
import { Footer } from "../components/Footer";
import { ListLink } from "../components/ListLink";

const Index = () => (
  <Container height="100vh">
    <Hero title="MotchHmmF" />
    <Main>
      <Text color="text">
        A collection of random stuff made with <Code>Next.js</Code> +{" "}
        <Code>chakra-ui</Code> + <Code>TypeScript</Code> + <Code>React</Code>.
      </Text>

      <List spacing={3} my={0} color="text">
        <ListLink icon={GiUnlitBomb} link="/minesweeper" text="Minesweeper" />
      </List>
    </Main>

    <DarkModeSwitch />
    <SideBar />

    <Footer>
      <Text>Home Page</Text>
    </Footer>
  </Container>
);

export default Index;
