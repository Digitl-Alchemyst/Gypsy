import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {
  return (
    <div className="border-slate-800 border chatRow rounded-md shadow-md shadow-slate-700">
        <PlusIcon className="h-5 w-5 text-slate-200 items-center justify-center" />
        <p >New Chat</p>
    </div>
  );
}

export default NewChat;