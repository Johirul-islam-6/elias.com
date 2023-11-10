import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/Components/Layout/Navbar/Navbar'
import Footer from '@/Components/Layout/Footer/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'elias profile',
  description: 'This is simple a web developer profile. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.2/css/all.min.css"
          />
        </Head>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>

    </html>
  )
}
