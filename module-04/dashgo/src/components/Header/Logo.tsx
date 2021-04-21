
import React from "react";

import { Text,} from "@chakra-ui/react";

export function Logo() {
  return (      
    <Text 
      fontSize="3xl" 
      fontWeight="bold" 
      letterSpacing="tight"
      w="64"
      >
      dashgo
      <Text ml="1" color="pink.500" as="span">.</Text>
    </Text>
  );
}
