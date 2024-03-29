import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import css from './main.module.scss'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={mont.className}>
        <Header></Header>
        <main  className={css.main}>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}


