import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { collection, query as query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
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
        className={`chatRow justify-center 
            ${activeChat && 'bg-slate-700 shadow-md border border-slate-600/50'}
            `}
    >
        <ChatBubbleLeftIcon className='h-6 w-6 text-slate-300' />
        <p className=' flex-1 hidden md:inline-flex truncate text-slate-200'>
            {messages?.docs[messages?.docs.length - 1]?.data().text || 'Start a new chat'}
        </p>
        <TrashIcon 
            className='h-6 w-6 text-slate-300 hover:text-rose-700' 
            onClick={deleteChat}
        />
        
    </Link>
  );
};

export default ChatRow;