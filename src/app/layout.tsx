import './globals.css';
import SideBar from '@/components/global/Sidebar';
import { SessionProvider } from '@/components/providers/SessionProvider';
// import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/l/auth';
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
      {/* <body className={inter.className}> */}
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <Header />
              <div className='flex'>
                <div className='bg-gypsydark-700 h-screen max-w-xs overflow-y-auto md:min-w-[20rem] lg:min-w-[22rem]'>
                  <SideBar />
                </div>

                {/* Client Working Notification */}
                <ClientProvider />

                <div className='flex-1 bg-[#343541]'>{children}</div>
              </div>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
