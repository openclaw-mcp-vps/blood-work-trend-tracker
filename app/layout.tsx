import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blood Work Trend Tracker',
  description: 'Track blood work trends over time. Import lab results and visualize biomarker trends with normal range comparisons.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="faaacdcb-1794-4905-a7fc-4ff3b179e61c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
