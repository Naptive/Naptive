import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' vitals.vercel-insights.com" />
      </head>
      <body >
        
        {children}
       <Analytics />
      </body>
    </html>
  )
}
