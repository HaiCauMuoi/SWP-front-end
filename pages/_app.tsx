import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DashboardLayout from '../components/DashboardLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps, { session }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeError', (e) => setLoading(false));
    router.events.on('routeChangeStart', (e) => setLoading(false));
    router.events.on('routeChangeComplete', (e) =>
      setTimeout(() => {
        setLoading(true);
      }, 3000)
    );

    return () => {
      router.events.off('routeChangeError', (e) => setLoading(false));
      router.events.off('routeChangeStart', (e) => setLoading(false));
      router.events.off('routeChangeComplete', (e) =>
        setTimeout(() => {
          setLoading(true);
        }, 3000)
      );
    };
  }, [router.events]);
  return (
    <SessionProvider session={session}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </SessionProvider>
  );
}

export default MyApp;
