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
    <div className='flex w-full flex-col items-center justify-between pt-6'>
      <div className='flex h-[91vh] w-full flex-col items-center justify-between'>
        {/* Chat History Window */}
        <div className='w-full flex-1'>
          <ChatWindow chatId={id} />
        </div>
        {/* Message Input Box */}

        <MessageInput chatId={id}  />
      </div>
    </div>
  );
}

export default ChatPage;

