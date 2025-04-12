import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import {FooterContainer} from './components/FooterContainer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Finder',
  description: 'Find your perfect car with our advanced search system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <FooterContainer />
      </body>
    </html>
  );
}