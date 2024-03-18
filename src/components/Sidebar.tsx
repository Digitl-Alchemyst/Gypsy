/* eslint-disable @next/next/no-img-element */
'use client';

import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className='flex h-screen flex-col p-2'>
      <div className='flex-1'>
        <div>
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (
        <div
          className='flex items-center justify-between gap-5 rounded-md p-2 hover:cursor-pointer hover:border hover:border-slate-600/50 hover:bg-slate-700 hover:shadow-md'
          onClick={() => signOut()}
        >
          <div className='flex items-center gap-5'>
            <img
              src={session.user?.image!}
              alt='user'
              className='h-12 w-12 cursor-pointer rounded-full hover:opacity-50'
            />
            <span className='justify-self-start text-lg font-semibold text-slate-300'>
              {session.user?.name!}
            </span>
          </div>

          <EllipsisHorizontalIcon className='h-8 w-8 justify-self-end text-slate-300' />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
