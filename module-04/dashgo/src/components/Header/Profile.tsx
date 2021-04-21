import React from "react";

import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo Dusik</Text>
        <Text color="gray.300" fontSize="small">
          eduardodusik@gmail.com
        </Text>
      </Box>
      
      <Avatar size="md" name="Eduardo Dusik" src="https://github.com/EDusik.png" />
    </Flex>
  );
}
