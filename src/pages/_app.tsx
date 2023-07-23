import '@/styles/base.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

// eslint-disable-next-line unused-imports/no-unused-vars
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
