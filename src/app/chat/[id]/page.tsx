import ChatWindow from '@/c/chat/ChatWindow';
import MessageInput from '@/c/chat/MessageInput';


type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {

  return (
    <div className='flex h-full w-full flex-col items-center justify-center pt-6 '>
      {/* Chat History Window */}
      <div className='flex h-full w-full flex-1 overflow-y-hidden pb-8 scrollbar-hide'>
        <ChatWindow chatId={id} />
      </div>
      {/* Message Input Box */}
      <div className='flex w-full items-center justify-center'>
        <MessageInput chatId={id} />
      </div>
    </div>
  );
}

export default ChatPage;

