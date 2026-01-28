import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'React + Next.js Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center bg-gray-400 justify-between px-4 py-4">
            <h1 className="mt-4 text-center text-sm font-medium text-gray-900">植杉匠のポートフォリオ</h1>
            <nav className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/works" className="mt-4 text-center text-sm font-medium text-gray-900">Works</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </header>
        /*背景色*/
        <main className="mx-auto max-w-6xl bg-gray-100 px-4 py-10">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
