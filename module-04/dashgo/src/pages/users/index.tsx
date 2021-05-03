import { useEffect } from "react";
import Link from "next/link";
import { 
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Text,
  Td,
  Th,
  Thead,
  Tr, 
  useBreakpointValue
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(response => response.json())
      .then(data => console.log(data)
    );
  }, []);

  return (
    <Box>
      <Header />

      <Flex maxWidth={1480} w="100%" my="6"mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink" 
                leftIcon={<Icon as={RiAddLine} fontSize="16"/>}>
                Criar novo
              </Button>
            </Link>         
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4" ,"6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4" ,"6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Eduardo Dusik</Text>
                    <Text fontSize="sm" color="gray.300">eduardodusik@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td> 
                  {isWideVersion && (
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple" 
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                        Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>

      </Flex>
    </Box>
  );
}
