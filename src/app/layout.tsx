import './globals.css';
import SideBar from '@/components/global/Sidebar';
import { SessionProvider } from '@/components/providers/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]';
import Login from '@/components/auth/Login';
import ClientProvider from '@/components/providers/ClientProvider';

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
            <div className='flex'>
              <div className='h-screen max-w-xs overflow-y-auto bg-[#202123] md:min-w-[20rem] lg:min-w-[22rem]'>
                {/* <SideBar /> */}
              </div>

              {/* Client Working Notification */}
              <ClientProvider />

              <div className='flex-1 bg-[#343541]'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
