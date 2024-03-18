'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import ChatMessage from './ChatMessage';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

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
    <div className='flex-1'>
      {messages?.docs.map((message) => (
        <ChatMessage key={message.id} message={message.data()} />
      ))}
    </div>
  );
};

export default ChatWindow;
