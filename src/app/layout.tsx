import type { Metadata } from 'next'
import {Inter} from 'next/font/google'
import "@/scss/index.scss"
import { Raleway, Fira_Code} from "next/font/google"
const raleway = Raleway({subsets:["latin"]})
const firacode = Fira_Code({subsets:["latin"],weight:["300","400","500","600","700"]})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Raj Gupta',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
