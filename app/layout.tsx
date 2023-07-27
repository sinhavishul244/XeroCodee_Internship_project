import type { Metadata } from 'next'
import "../styles/app.scss"
import { Open_Sans, Space_Grotesk, ABeeZee, Urbanist } from 'next/font/google'
import Navbar from '@/components/server/navbar'

const opensans = Open_Sans({
  subsets: ['latin'],
  variable: "--font-opensans",
  weight: ['400', '600']
})

const space_Grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: "--font-spaceG",
  weight: ['300', '400']
})

const aBeeZee = ABeeZee({
  subsets: ['latin'],
  variable: "--font-aBeeZee",
  weight: ['400']
})
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: "--font-urbanist",
  weight: ['400', '500', '600', '700']
})


export const metadata: Metadata = {
  title: 'Code Doctor',
  description: 'Homepage of Code Doctor App',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body className={`${opensans.variable} ${space_Grotesk.variable} ${aBeeZee.variable} ${urbanist.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
