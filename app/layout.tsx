import './globals.css'
import type { Metadata } from 'next'
import { RetroBinaryBackground, RetroGrid, RetroCursor} from '@/components/retro-decorations'

export const metadata: Metadata = {
  title: 'Red Wood Labs - Retro Open Source',
  description: 'An open-source coding organization with a retro twist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-white">
        <RetroBinaryBackground />
        <RetroGrid />
        <RetroCursor />
        {children}
      </body>
    </html>
  )
}

