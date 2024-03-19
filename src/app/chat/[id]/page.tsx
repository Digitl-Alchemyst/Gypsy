import ChatWindow from '@/c/chat/ChatWindow';
import MessageInput from '@/c/chat/MessageInput';


type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {

  return (

      <div className='flex h-full w-full flex-col pt-6 items-center justify-center'>
        {/* Chat History Window */}
        <div className='w-full flex-1 overflow-y-auto h-full flex'>
          <ChatWindow chatId={id} />
          where are you
        </div>
        {/* Message Input Box */}
        <div className='w-full flex items-center justify-center'>

        <MessageInput chatId={id}  />
        </div>
      </div>

  );
}

export default ChatPage;

