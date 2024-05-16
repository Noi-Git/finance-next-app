//create a seperate component because we don't want to wrap our app with "use client"
'use client'

import { SessionProvider } from 'next-auth/react'

type Props = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
