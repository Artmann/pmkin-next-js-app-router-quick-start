import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-gray-700 antialiased`}
      >
        <header className="border-b border-slate-200">
          <div className="w-full max-w-2xl mx-auto">
            <div className="px-8 py-3">
              <Link
                className="font-semibold text-black"
                href="/"
              >
                My Travel Blog
              </Link>
            </div>
          </div>
        </header>

        <div className="w-full max-w-2xl mx-auto md:pt-4 pb-16">{children}</div>

        <footer className="w-full border-t border-slate-200">
          <div className="w-full max-w-2xl mx-auto">
            <div className="px-8 py-6 flex justify-center gap-4 text-sm">
              <Link
                className="block text-black hover:underline"
                href="https://pmkin.io"
              >
                Built with PMKIN
              </Link>
              <div>-</div>
              <Link
                className="block text-black hover:underline"
                href="https://github.com/pmkin-cms/pmkin-next-js-app-router-quick-start"
              >
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
