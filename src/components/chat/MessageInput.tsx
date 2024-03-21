/* eslint-disable import/no-extraneous-dependencies */
'use client';

import { useState, FormEvent, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '#/firebase';
import toast from 'react-hot-toast';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import MessageSettings from './MessageSettings';
import AudioRecorder, { mimeType } from './AudioRecorder';

type Props = {
  chatId: string;
};

function MessageInput({ chatId }: Props) {

  const fileRef = useRef<HTMLInputElement| null>(null);
  const submitAudioRef = useRef<HTMLButtonElement | null>(null);

  const uploadAudio = (blob: Blob) => {
    
    const audioFile = new File([blob], 'audio.webm', { type: mimeType });

    // Set the blob file as the value of the file input field 
    if (fileRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(audioFile);
      fileRef.current.files = dataTransfer.files;

      // Submit the Audio File 
      if (submitAudioRef.current) {
        submitAudioRef.current.click();
      }
    }

  }

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
    <div className='m-2 flex w-10/12 flex-col items-center rounded-lg border border-mattepurp-600 bg-mattepurp-600/60 text-mattepurp-300'>
      <MessageSettings />
      <div className='flex w-full space-x-3 px-4 pb-2'>
        <form
          onSubmit={sendMessage}
          // action={formAction}
          className='flex w-full flex-1 items-center space-x-3 text-sm '
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
            className='my-1 h-10 rounded-lg border border-mattepurp-600 bg-gypsypurp-600 px-3 py-2 font-bold text-gypsypink-400 shadow-lg hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gypsypurp-400 disabled:text-gypsypink-600'
          >
            <PaperAirplaneIcon className='h-6 w-6 -rotate-45' />
          </button>

          {/* Voice Interaction  */}

          {/* Audio File Loader  */}
          <div>
            <input type='file' className='hidden' ref={fileRef} name='audio' />
            <button type='submit' hidden ref={submitAudioRef}>
              Submit Audio
            </button>

            {/* Audio Recorder  */}
            <AudioRecorder uploadAudio={uploadAudio} />

            {/* AI Voice Synthesiser  */}
            <div className='hidden'>.</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageInput;
