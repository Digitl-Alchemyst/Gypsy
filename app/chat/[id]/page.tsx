import ChatWindow from '@/components/ChatWindow'
import MessageInput from '@/components/MessageInput'
import React from 'react'


type Props = {
  params: {
    id: string
  };
};

function ChatPage({ params: { id }} : Props) {
    // console.log(props)
  
  return (
    <div className='flex flex-col h-screen overflow-hidden items-center'>

      {/* Chat History Window  */}
      <ChatWindow chatId={id} />
      {/* Message Input Box  */}
      <MessageInput chatId={id} />
    </div>
  );
}

export default ChatPage;