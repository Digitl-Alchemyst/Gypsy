/* eslint-disable import/no-extraneous-dependencies */
'use client';

import { useState, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '#/firebase';
import toast from 'react-hot-toast';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import MessageSettings from './MessageSettings';
import AudioRecorder from './AudioRecorder';


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

    // // Toast notification  for loading
    // const notification = toast.loading('GypsyGPT is thinking...');

    // await fetch('/api/askGypsy', {
    //   // await fetch('/app/api/askGypsy', {
    //   // await fetch(`/pages/api/askGypsy`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     prompt: input,
    //     chatId,
    //     model,
    //     session,
    //   }),
    // }).then(() => {
    //   // Toast notification for success
    //   toast.success('GypsyGPT has responded!', {
    //     id: notification,
    //   });
    // });
  };

  return (
    <div className='m-2 flex w-10/12 flex-col items-center rounded-lg  border border-mattepurp-600 bg-mattepurp-600/60 text-mattepurp-300'>
      <MessageSettings />
      <div className='flex w-full pb-2 px-4 space-x-3'>
      <form
        onSubmit={sendMessage}
        className='flex w-full items-end space-x-3 text-sm flex-1 '
      >
        <input
          type='text'
          value={prompt}
          tabIndex={0}
          // rows={2}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          className='max-h-[20dvh] flex-1 rounded-md border border-gypsypurp-400/60 bg-mattepurp-600/60 px-4  py-1 text-gypsygold-100 focus:outline-none disabled:cursor-not-allowed disabled:text-mattepurp-400'
          placeholder='Please enter your prompt here...'
        />
        <button
          type='submit'
          disabled={!prompt || !session}
          className='my-1 h-12 rounded-lg border border-mattepurp-600 bg-gypsypurp-600 px-3 py-2 font-bold text-gypsypink-400 shadow-lg hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gypsypurp-400 disabled:text-gypsypink-600'
        >
          <PaperAirplaneIcon className='h-7 w-7 -rotate-45' />
        </button>
      </form>

      {/* Audio Recorder  */}
      <AudioRecorder />
      </div>
      {/* Model Selection  */}
      <div></div>
    </div>
  );
}

export default MessageInput;
