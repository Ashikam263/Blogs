import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
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
      <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-8 my-6 rounded-md">
        <div>
          <Link href="/">
            <h1 className="text-3xl text-white font-mono mt-4">Blog Posts</h1>
          </Link>
        </div>
        <div>
          <Link href="/new">
            <button className="bg-white text-indigo-500 px-4 py-2 rounded-md">Create</button>
          </Link>
        </div>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body className="{inter.className} mx-auto  px-6 mb-8">
        {header}
        {children}
      </body>
    </html>
  )
}
