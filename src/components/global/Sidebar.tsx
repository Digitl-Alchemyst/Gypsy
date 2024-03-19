/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useCollection } from 'react-firebase-hooks/firestore';
import AccountButton from '../auth/AccountButton';

import NewChat from './NewChat';
import { db } from '#/firebase';
import { collection, orderBy, query } from '@firebase/firestore';
import { useSession } from 'next-auth/react';
import ChatRow from './ChatRow';


function Sidebar() {
  
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    query(
      collection(db, 'users', session?.user?.email!, 'chats'),
      orderBy('createdAt', 'asc'),
    ),
  );

  return (
    <div className='flex h-full flex-col min-h-max border-r border-purple-400 p-2'>
      <div className='flex justify-between flex-col h-full'>
        <div className='flex-1'>
          <NewChat />

          {/* Model Selection */}

          {/* Map through the ChatRows */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id}/>
          ))}

        </div>
        {/* Account Button  */}
        <AccountButton />
      </div>
    </div>
  );
}

export default Sidebar;
