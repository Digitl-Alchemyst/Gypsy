'use client'

import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

function AccountButton() {
    
    const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div
          className='flex items-center justify-between gap-5 rounded-md hover:cursor-pointer hover:border hover:border-mattepurp-600/50 hover:bg-mattepurp-700 hover:shadow-md py-1 px-3'
          onClick={() => signOut()}
        >
          <div className='flex items-center space-x-3'>
            <Image
              src={session.user?.image!}
              alt='user'
              width={35}
              height={35}
              quality={100}
              className=' cursor-pointer rounded-full hover:opacity-50'
            />
            <span className='justify-self-start text-lg font-semibold text-gypsygold-300'>
              {session.user?.name!}
            </span>
          <EllipsisHorizontalIcon className='h-8 w-8 justify-self-end text-gypsygold-400' />
          </div>

        </div>
      )}
    </div>
  );
}

export default AccountButton