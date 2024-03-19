/* eslint-disable import/no-extraneous-dependencies */
'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '#/firebase';
import toast from 'react-hot-toast';


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
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages',
      ),
      message,
    );

    // Toast notification  for loading
    const notification = toast.loading('Chat GPT is thinking...');

    await fetch('/api/askGypsy', {
      // await fetch('/app/api/askGypsy', {
      // await fetch(`/pages/api/askGypsy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notification for success
      toast.success('Chat GPT has responded!', {
        id: notification,
      });
    });
  };

  return (
    <div className='m-2 justify-end w-9/12 rounded-lg border border-mattepurp-600 bg-mattepurp-600/60 text-sm text-mattepurp-300'>
      <form onSubmit={sendMessage} className='flex items-end space-x-5 py-2 pl-5 pr-3'>
        <textarea
          // type='text'
          value={prompt}
          tabIndex={0}
          rows={2}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          className='flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-mattepurp-400 text-gypsygold-100 max-h-[25dvh]'
          placeholder='Please enter your prompt here...'
        />
        <button
          type='submit'
          disabled={!prompt || !session}
          className='rounded-lg border h-12 border-mattepurp-600 bg-gypsypurp-600 px-3 py-2 font-bold text-gypsypink-400 shadow-lg hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gypsypurp-400 disabled:text-gypsypink-600'
        >
          <PaperAirplaneIcon className='h-7 w-7 -rotate-45' />
        </button>
      </form>

      <div>{/* Model Selection  */}</div>
    </div>
  );
}

export default MessageInput;
