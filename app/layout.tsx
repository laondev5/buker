import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buker',
  description: 'Get all the best in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
