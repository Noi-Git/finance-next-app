'use clinet'

import Notification from '@/components/Notification'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '../components/Navbar'
import QueryProvider from '@/components/QueryProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Finance',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div>
              <Navbar />
              {children}
              <ToastContainer
                position='top-right'
                theme='dark'
                autoClose={3000}
              />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
