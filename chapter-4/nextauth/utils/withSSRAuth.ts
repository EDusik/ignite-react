import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

type WithSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
}

import decode from "jwt-decode";
import { validateUserPermissions } from "./validateUserPermissions";

export function withSSRAuth<P>(fn: GetServerSideProps<P>, options?: WithSSRAuthOptions): GetServerSideProps {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies["nextauth.token"]

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false
        }
      }
    }

    if (options) {
      const user = decode<{permissions, roles}>(token)
      const { permissions, roles } = options;
  
      const userHasValidPermissions = validateUserPermissions({ 
        user,
        permissions,
        roles 
      });

      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: "/dashboard", 
            permanent: false
          }
        }
      }
    }
    
    try {
      return await fn(ctx);
    } catch(error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(ctx, "nextauth.token");
        destroyCookie(ctx, "nextauth.refreshToken");
    
        return { 
          redirect: {
            destination: "/",
            permanent: false
          }
        }
      }
    }
  }
}
