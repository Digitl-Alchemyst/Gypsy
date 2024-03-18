/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { DocumentData } from 'firebase/firestore';

type Props = {
  message: DocumentData;
};

function ChatMessage({ message }: Props) {
  const isChatGPT = message.user.name === 'ChatGPT';
  return (
    <div className={`py-5 text-slate-100 ${isChatGPT && 'bg-[#434654]'}`}>
      <div className='mx-auto flex max-w-2xl space-x-5 px-10'>
        <img
          src={message.user.avatar}
          alt='user'
          className='h-8 w-8 cursor-pointer rounded-full hover:opacity-50'
        />
        <p className='text-md pt-1'>{message.user}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
