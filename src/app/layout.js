import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '../components/Header';

const poppins = Poppins({
      subsets: ['latin'],
      display: 'swap',
      variable: '--font-poppins',
      weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  })

export const metadata = {
  title: 'Raul Javier - Portfolio',
  description: 'Freelance Musician & Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
