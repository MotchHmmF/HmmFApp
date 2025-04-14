import {
  IconButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  List,
} from "@chakra-ui/react";
import { TiThMenu, TiHome } from "react-icons/ti";
import { GiUnlitBomb } from "react-icons/gi";
import { useState } from "react";
import { ListLink } from "./ListLink";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        position="fixed"
        top={4}
        left={4}
        icon={<TiThMenu />}
        aria-label="Toggle Sidebar"
        colorScheme="green"
        onClick={toggleSideBar}
      />

      <Drawer
        isOpen={isOpen}
        placement="start"
        onClose={() => setIsOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Pages </DrawerHeader>

          <DrawerBody>
            <List spacing={3} my={0} color="text">
              <ListLink icon={TiHome} link="/" text="Home" />
              <ListLink
                icon={GiUnlitBomb}
                link="/minesweeper"
                text="MineSweeper"
              />
            </List>
          </DrawerBody>

          <DrawerFooter>Drawer Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
