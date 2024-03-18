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

          <div>{/* Model Selection */}</div>

                {/* Map through the ChatRows */}
                <div className='flex flex-col gap-2 mt-3'>
                  {chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))}
                </div>

            </div>
        </div>
      </div>
      {session && (
        <div
          className='flex items-center justify-between gap-5 rounded-md p-2 hover:cursor-pointer hover:border hover:border-slate-600/50 hover:bg-slate-700 hover:shadow-md'
          onClick={() => signOut()}
        >
          <div className='flex items-center gap-5'>
            <img
              src={session.user?.image!}
              alt='user'
              className='h-12 w-12 cursor-pointer rounded-full hover:opacity-50'
            />
            <span className='justify-self-start text-lg font-semibold text-slate-300'>
              {session.user?.name!}
            </span>
          </div>

          <EllipsisHorizontalIcon className='h-8 w-8 justify-self-end text-slate-300' />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
