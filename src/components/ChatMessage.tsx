
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData;
};

function ChatMessage({ message }: Props) {
  const isChatGPT = message.user.name === 'ChatGPT';
  return (
    <div className={`py-5 text-slate-100 ${isChatGPT && 'bg-[#434654]'}`}>
        <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
            <img src={message.user.avatar} alt='user' className='rounded-full h-8 w-8 cursor-pointer hover:opacity-50' />
            <p className='pt-1 text-md'>
                {message.user}
            </p>
        </div>
    </div>
  );
};

export default ChatMessage;