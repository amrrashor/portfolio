import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import '../utils/utiliy-classess/utility.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amr Ashour | Portfolio',
  description: 'Created by Amr Ashour',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
