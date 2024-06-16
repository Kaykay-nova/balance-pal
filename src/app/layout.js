import { Work_Sans } from 'next/font/google';
import { Header } from '@/app/lib/components/Header';
import { Footer } from '@/app/lib/components/Footer';
import Head from 'next/head';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'BalancePal',
  description: 'Vrátíme vám vaši ztracenou rovnováhu',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon-16x16.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </Head>
      <body className={workSans.className}>
        <div className='page'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
