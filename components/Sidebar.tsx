/* eslint-disable @next/next/no-img-element */
'use client';
// 'use strict';

import NewChat from './NewChat'
import ChatRow from './ChatRow'
import { useSession, signOut } from 'next-auth/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';



function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && 
      query(
        collection(db, 'users', session.user?.email!, 'chats'), //query may need to be removed from this argument
        orderBy('createdAt', 'desc'),
      )
  );
  console.log("🚀 ~ Sidebar ~ chats:", chats)

  if (loading) {
    // Render a loading state if data is still being fetched
    return <div>Loading...</div>;
  }

  if (error) {
    // Render an error state if an error occurred while fetching data
    return <div>Error: {error.message}</div>;
  }

  
  return ( 
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>            
            <div>
              
              <NewChat />

              <div>
                {/* Model Selection */}
              </div>

                {/* Map through the ChatRows */}
                <div className='flex flex-col gap-2 mt-3'>
                  {chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))}
                </div>

            </div>
        </div>
        {session && (
          <div 
            className='flex items-center p-2 gap-5 justify-between hover:bg-slate-700 rounded-md hover:shadow-md hover:border hover:border-slate-600/50 hover:cursor-pointer'
            onClick={() => signOut()}
          >

            <div className='flex gap-5 items-center'>
              <img src={session.user?.image!} alt='user' className='rounded-full h-12 w-12 cursor-pointer hover:opacity-50' />   
              <span className='text-slate-300 text-lg font-semibold justify-self-start'>
                  {session.user?.name!}
              </span>
            </div>

            <EllipsisHorizontalIcon className='text-slate-300 h-8 w-8 justify-self-end' />              

          </div>
        )}
    </div>
  );
}

export default Sidebar;