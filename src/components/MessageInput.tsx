'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { FormEvent } from 'react';


type Props = {
    chatId: string;
};

function MessageInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState('');
    const { data: session } = useSession();

    // useSWR to get the model
    const model = 'text-davinci-003';

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt('');

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
            }
        };

        await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), 
            message
        );
        
        // Toast notification  for loading
        const notification = toast.loading('Chat GPT is thinking...');

        await fetch('/api/askGypsy', {
        // await fetch('/app/api/askGypsy', {
        // await fetch(`/pages/api/askGypsy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                prompt: input, 
                chatId, 
                model, 
                session
             }),
        }).then(() => {
        // Toast notification for success
            toast.success('Chat GPT has responded!', { 
                id: notification, 
                });
        });

    };

  return (
    <div className='bg-slate-600/60 text-slate-300 rounded-lg text-sm m-2 w-9/12 border border-slate-600'>
        <form onSubmit={sendMessage} className='pl-5 pr-3 py-2 space-x-5 flex'>
            <input 
                type="text"
                value={prompt}
                disabled={!session}
                onChange={(e) => setPrompt(e.target.value)}
                className='bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed disabled:text-slate-400'
                placeholder="Type your message here..."
             />
             <button 
                type='submit'
                disabled={!prompt || !session}
                className='bg-slate-800/60 hover:opacity-50 font-bold px-3 py-2 text-sky-600 rounded-lg shadow-lg border border-slate-600 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-cyan-400'
            >
                <PaperAirplaneIcon className='h-7 w-7 -rotate-45' />
             </button>
        </form>

        <div>
            {/* Model Selection  */}            
        </div>
    </div>
  );
};

export default MessageInput;