import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ParentProps } from '@/types/props'
import JotaiProvider from '../components/JotaiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rabbit, Read!',
  description: 'The fast, fun, and free way to practice speed reading',
  icons: {
    icon: "/rabbits/tiny.png"
  }
}

export default function RootLayout({ children }: ParentProps) {
  return (
    <html lang="en">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8343995374377986"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <JotaiProvider>
          {children}
        </JotaiProvider>
      </body>
    </html>
  )
}
