/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  collection,
  query as query,
  orderBy,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '#/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import path from 'path';

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {

  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = useSession();

  const [activeChat, setActiveChat] = useState(false);

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    );

  useEffect(() => {
    if (!pathname) return;

    setActiveChat(pathname.includes(id));
  }, [pathname, id]); // might not need id here

  const deleteChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/');
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow my-2 justify-center 
            ${activeChat && 'border border-mattepurp-600/50 bg-gypsypurp-700 hover:bg-darkpurp-600'}
            `}
    >
      <ChatBubbleLeftIcon className='h-6 w-6 text-gypsypurp-300' />
      <p className=' hidden flex-1 truncate text-gypsypurp-200 md:inline-flex'>
        {messages?.docs[messages?.docs.length - 1]?.data().text ||
          'Start a new chat'}
      </p>
      <TrashIcon
        className='text-darkpink-400 h-5 w-5 hover:text-gypsypink-600'
        onClick={deleteChat}
      />
    </Link>
  );
}

export default ChatRow;
