import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor Tax Receipt Extractor — Extract Tax Deductions Automatically',
  description: 'Upload bank statements and receipts. AI categorizes your expenses and generates tax deduction reports for freelancers and independent contractors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6961acb-51d3-4bac-89b2-5d47148e795f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
