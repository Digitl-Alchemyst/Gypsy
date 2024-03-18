import React from 'react'
import Image from 'next/image';
import SamplePrompts from '@/components/elements/SamplePrompts';

const WelcomePage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-6'>
      <h1 className='text-7xl font-bold text-gypsygold-200'>GypsyGPT</h1>
      <Image
        src='/Full.png'
        alt='GypsyGPT'
        width={175}
        height={250}
        className='rounded-md bg-gypsygold-500 p-3 '
      />
      <SamplePrompts />
    </div>
  );
}

export default WelcomePage