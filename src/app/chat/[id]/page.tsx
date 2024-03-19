import ChatWindow from '@/components/chat/ChatWindow';
import MessageInput from '@/components/chat/MessageInput';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  // console.log(props)

  return (
    <div className='flex h-full min-h-max flex-col items-center w-full justify-between pt-6'>
      <div className='flex justify-between items-center flex-col h-screen -mt-22 w-full'>

      {/* Chat History Window */}
      <div className='w-full flex-1'>
        <ChatWindow chatId={id} />
      </div>
      {/* Message Input Box */}

      <MessageInput chatId={id} />
      </div>
    </div>
  );
}

export default ChatPage;
