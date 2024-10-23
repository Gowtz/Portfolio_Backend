import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { formSchema } from "./types/user";

// TODO: Try to improve later
// Implemented admin using .env file
// @ts-ignore
function getUser(username,pass){
 if(username === process.env.ADMIN_LOGIN && pass === process.env.ADMIN_PASSWORD){
    return {name:username}
  }
 else{
    return null

  }

}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = formSchema.safeParse(credentials);
        if (parsedCredentials.success) {
          const {username, password } = parsedCredentials.data;
          const user = getUser(username,password);
          
          if (user) return user;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});


