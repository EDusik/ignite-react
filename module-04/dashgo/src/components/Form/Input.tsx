import React from "react";
import {
  Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ 
  name, 
  label,
  ...rest
}) {

  return (
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

    <ChakraInput
        type="email"
        name="email"
        id="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        placeholder="E-mail"
        {...rest}
      />
    </FormControl>
  );
}
