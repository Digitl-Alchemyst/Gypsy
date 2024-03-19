/* eslint-disable @next/next/no-img-element */
import { DocumentData } from 'firebase/firestore';

type Props = {
  message: DocumentData;
};

function ChatMessage({ message }: Props) {
  const isChatGPT = message.user.name === 'ChatGPT';
  return (
    <div className={`py-3 max-w-7xl bg-mattepurp-500/30 border text-sm text-mattepurp-100 border-gypsypurp-400/60 rounded-md h-auto w-full ${isChatGPT && 'bg-darkpink-700 text-gypsypurp-300'}`}>
      <div className='flex max-w-2xl space-x-5 px-10'>
        <img
          src={message.user.avatar}
          alt='user'
          className='h-8 w-8 rounded-full hover:opacity-50'
        />
        <p className='text-md pt-1 w-full'>{message.text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
