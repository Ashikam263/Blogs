"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const inter = Inter({ subsets: ['latin'] })
import React, { useState } from 'react';
import EditorComponent from '@/components/Editor'

// export const metadata: Metadata = {
//   title: 'Blogs',
//   description: 'A list of Blogs',
// }
//commenting out this session displays blogs title but use client wont work
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isEditorEditMode, setIsEditorEditMode] = useState(false);
  const openEditorInEditMode = () => {
    setIsEditorEditMode(true);
  };

  const header = (
    <header>
      <div className="flex items-center justify-between bg-black p-8 my-6 rounded-md">
        <div>
          <Link href="/">
            <h1 className="text-3xl text-white font-mono mt-4">Blog Posts</h1>
          </Link>
        </div>
        <div>
          <Link href="/new">
          <button
              className="bg-white text-black px-4 py-2 rounded-md"
              onClick={openEditorInEditMode} // Invoke the callback on button click
            >Create</button>
          </Link>
        </div>
      </div>
    </header>
  );

  return (
    <html lang="en">
      <body className="{inter.className} mx-auto  px-6 mb-8">
        {header}
        {isEditorEditMode ? (
          <EditorComponent initialContent="" />
        ) : (
          // Render your other content here when not in edit mode
          <>{children}</>
        )}
      </body>
    </html>
  );
}
