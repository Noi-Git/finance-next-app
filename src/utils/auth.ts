import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from './connect'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID as string,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      //below is another to make it string
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
}

//getAuthSession allow use to get user info and status inside the component
export const getAuthSession = () => getServerSession(authOptions)
