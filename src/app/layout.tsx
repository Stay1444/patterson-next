"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import style from './layout.module.sass'
import Header from '@/components/Header'
import { CartContextProvider } from '@/context/CartContext'

import './globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${style.app}`}>
        <CartContextProvider>
          <header className={style.header}>
              <Header/>
          </header>
          <div className={style.content}>
            {children}
          </div>
        </CartContextProvider>
      </body>
    </html>
  )
}
