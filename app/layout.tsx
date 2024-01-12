import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'A list of Blogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-white font-mono mt-4">Blog Posts</h1>
        </Link>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body className="{inter.className} mx-auto  max-w-2xl px-6 mb-8">
        {header}
        {children}
      </body>
    </html>
  )
}
