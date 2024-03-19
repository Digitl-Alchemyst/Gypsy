/* eslint-disable import/no-extraneous-dependencies */
'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import ChatMessage from './ChatMessage';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '#/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ArrowDownCircleIcon } from 'lucide-react';

type Props = {
  chatId: string;
};

const ChatWindow = ({ chatId }: Props) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          'users',
          session?.user?.email!,
          'chats',
          chatId,
          'messages',
        ),
        orderBy('createdAt', 'asc'),
      ),
  );

 return (
   <div className='flex overflow-y-auto flex-col w-full space-y-4 items-center overflow-x-hidden scrollbar-hide'>
    {messages?.empty && (
      <div className='flex flex-col items-center justify-start h-full w-full'>
      <p className='text-lg text-gypsypurp-300 mt-12 text-center'>Enter a Prompt below to get started.</p>
      <ArrowDownCircleIcon className='h-10 w-10 text-gypsypurp-300 mt-12 text-center animate-bounce' />
      </div>
    )}
     {messages?.docs.map((message) => (
       <ChatMessage key={message.id} message={message.data()} />
     ))}
   </div>
 );

};

export default ChatWindow;
