import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ParentProps } from '@/types/props'
import JotaiProvider from '../components/JotaiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rabbit, Read',
  description: 'Fast, fun, free way to practice speed reading',
}

export default function RootLayout({ children }: ParentProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JotaiProvider>
          {children}
        </JotaiProvider>
      </body>
    </html>
  )
}
