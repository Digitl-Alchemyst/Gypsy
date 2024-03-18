/* eslint-disable @next/next/no-img-element */
'use client';

import NewChat from './NewChat'
import { useSession, signOut } from 'next-auth/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

function Sidebar() {
  const { data: session } = useSession();

  return ( 
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>            
            <div>
              
              <NewChat />

              <div>
                {/* Model Selection */}
              </div>

                {/* Map through the ChatRows */}

            </div>
        </div>
        {session && (
          <div 
            className='flex items-center p-2 gap-5 justify-between hover:bg-slate-700 rounded-md hover:shadow-md hover:border hover:border-slate-600/50 hover:cursor-pointer'
            onClick={() => signOut()}
          >

            <div className='flex gap-5 items-center'>
              <img src={session.user?.image!} alt='user' className='rounded-full h-12 w-12 cursor-pointer hover:opacity-50' />   
              <span className='text-slate-300 text-lg font-semibold justify-self-start'>
                  {session.user?.name!}
              </span>
            </div>

            <EllipsisHorizontalIcon className='text-slate-300 h-8 w-8 justify-self-end' />              

          </div>
        )}
    </div>
  );
}

export default Sidebar;