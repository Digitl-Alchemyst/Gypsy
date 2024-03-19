'use client'

import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { LogOutIcon } from 'lucide-react';

function AccountButton() {
    
    const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div className='flex w-full items-center gap-5 rounded-md px-3 py-1 hover:border hover:border-mattepurp-600/50 hover:bg-mattepurp-700 hover:shadow-md'>
          <div className='flex items-center justify-between space-x-3 w-full'>
            <Image
              src={session.user?.image!}
              alt='user'
              width={35}
              height={35}
              quality={100}
              className=' cursor-pointer rounded-full hover:opacity-50'
            />
            <span className='justify-self-start text-lg font-light text-gypsypurp-300'>
              {session.user?.name!}
            </span>
            <LogOutIcon
              onClick={() => signOut()}
              className='h-6 w-6 justify-self-end text-gypsygold-400 hover:cursor-pointer'
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountButton