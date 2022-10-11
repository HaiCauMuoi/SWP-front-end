import { ReactComponentElement, ReactNode } from 'react';
import Footer from '../Footer';
import Main from '../Main';
import Header from '../Header';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  const showHeader = router.pathname === '/' ? false : true;
  return (
    <div>
      {showHeader && <Header />}
      <div className="w-full h-full">
        <Main>
          {children}
          <Footer></Footer>
        </Main>
      </div>
    </div>
  );
}
