import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'WebArc Studio — Modern & Scalable Web Solutions',
  description:
    'WebArc Studio builds modern, scalable web solutions including websites, web apps, UI/UX design, and e-commerce platforms.',
  keywords: ['web development', 'web design', 'UI/UX', 'Next.js', 'React', 'agency'],
  openGraph: {
    title: 'WebArc Studio — Modern & Scalable Web Solutions',
    description:
      'We craft modern, scalable web solutions that help businesses grow and stand out.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-text-primary bg-white antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
