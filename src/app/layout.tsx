import './globals.css';
import SideBar from '@/components/global/Sidebar';
import { SessionProvider } from '@/components/providers/SessionProvider';
// import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/util/auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Login from '@/components/auth/Login';
import ClientProvider from '@/components/providers/ClientProvider';
import Header from '@/components/global/Header';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GypsyGPT',
  description: 'AI Assisstant Growth Performance Tool',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className='flex h-screen flex-col'>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex h-screen flex-col'>
              <Header />
              <div className='flex h-full w-full overflow-y-hidden scrollbar-hide'>
                {/* Sidebar  */}
                <div className='w-1/6 bg-gypsydark-700'>
                  <SideBar />
                </div>
                {/* Main App Window  */}
                <div className='from-darkpurp-600 to-gypsydark-700 h-full w-full overflow-y-hidden bg-gradient-to-b px-5'>
                  {children}
                </div>
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
