// app/layout.js
import './globals.css'
import { Outfit, Ovo } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
})

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ovo',
})

export const metadata = {
  title: 'Rupesh | Full Stack Developer',
  description: 'Portfolio website of Rupesh Sah – Full Stack Developer from Nepal.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Rupesh | Portfolio',
    description: 'Explore Rupesh\'s full-stack portfolio and projects.',
    url: 'https://yourdomain.com',
    siteName: 'Rupesh Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rupesh Portfolio',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className='scroll-smooth'>
      <body
        className={`${outfit.variable} ${ovo.variable} font-sans antialiased leading-relaxed bg-white text-black dark:bg-[#0e0e0e] dark:text-white scroll-smooth overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
