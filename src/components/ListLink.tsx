import { ListItem, ListIcon, Link as ChakraLink } from "@chakra-ui/react";
import { IconType } from "react-icons";

export const ListLink = ({
  icon,
  link,
  text,
}: {
  icon: IconType;
  link: string;
  text: string;
}) => {
  return (
    <ListItem>
      <ListIcon as={icon} color="green.500" />
      <ChakraLink href={link} flexGrow={1} mr={2}>
        {text}
      </ChakraLink>
    </ListItem>
  );
};

// export default ListLink;
