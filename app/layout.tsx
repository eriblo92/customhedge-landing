
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CustomHedge',
  description: 'Professional derivatives hedging tailored to your holdings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
