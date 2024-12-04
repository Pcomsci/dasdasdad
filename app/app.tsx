// pages/_app.tsx
import '../styles/globals.css'; // นำเข้าไฟล์ CSS
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
