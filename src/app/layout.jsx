import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import { ThemeProvider } from "./components/theme-provider";
import { ToggleBtn } from "./components/togglebutton/ToggleBtn";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'doc-drx',
  description: 'Med recoemndations based on symptoms',
}

export default function RootLayout({ children }) {


  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
