/* eslint-disable import/no-extraneous-dependencies */
'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

// type Props = {
//   id: string;
// };

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        // messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      },
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div
      onClick={createNewChat}
      className='mt-4 chatRow bg-gypsydark-300  border-gypsydark-800 shadow-gypsydark-700 rounded-md border shadow-md'
    >
      <PlusIcon className='text-gypsydark-800 h-5 w-5 items-center justify-center' />
      <p className='text-gypsydark-700'>New Chat</p>
    </div>
  );
}

export default NewChat;
