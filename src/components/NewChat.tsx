'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

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
      className='chatRow rounded-md border border-slate-800 shadow-md shadow-slate-700'
    >
      <PlusIcon className='h-5 w-5 items-center justify-center text-slate-200' />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
