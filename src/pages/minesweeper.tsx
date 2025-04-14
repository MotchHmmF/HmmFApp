import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { SideBar } from "../components/SidebarSwitch";
import { Board } from "../components/minesweeper/board";

const MineSweeper = () => (
  <Container height="100vh">
    <Hero title="MINESWEEPER" />

    <Board />

    <DarkModeSwitch />
    <SideBar />
  </Container>
);

export default MineSweeper;
