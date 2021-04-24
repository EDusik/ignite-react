import { ElementType } from "react";
import Link from "next/link";

import { 
  Icon, 
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps 
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text fontWeight="medium" ml="4">{children}</Text>
      </ChakraLink>  
    </Link>
  );
}
