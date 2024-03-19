/* eslint-disable import/no-extraneous-dependencies */
'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '#/firebase';



function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      },
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div
      onClick={createNewChat}
      className='hover:bg-darkpink-400/70 chatRow my-2 mt-4 rounded-lg  border border-gypsydark-800 bg-gypsypurp-300  shadow-md shadow-gypsydark-700'
    >
      <PlusIcon className='h-5 w-5 items-center justify-center text-gypsydark-800' />
      <p className='text-gypsydark-600'>New Chat</p>
    </div>
  );
}

export default NewChat;
