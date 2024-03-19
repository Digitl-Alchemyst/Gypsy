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
           <>
             <Header />
             <div className='flex h-full w-full'>
               <div className='bg-gypsydark-700 w-1/6'>
                 <SideBar />
               </div>
               <div className='bg-darkpurp-700 h-full w-full'>
                 <div className='px-5 h-full'>{children}</div>
               </div>
             </div>
           </>
         )}
       </SessionProvider>
     </body>
   </html>
 );

}
