import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import CartIcon from "assets/CartIcon";
import Logo from "assets/Logo";

import React from "react";

const Navbar = () => {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={8}>
        <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo width={80} height={80} />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <Button
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  gap={4}
                  _hover={{
                    bg: "blue.300",
                  }}
                >
                  <CartIcon width={20} height={20} />
                  Cart
                </Button>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
