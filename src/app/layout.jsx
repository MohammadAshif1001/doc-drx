import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'doc-drx',
  description: 'Med recoemndations based on symptoms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
