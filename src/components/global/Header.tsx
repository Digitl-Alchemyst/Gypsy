import React from 'react';
import AccountButton from '../auth/AccountButton';
import Image from 'next/image';
import Settings from './Settings';
import PromptEngineer from '../features/PromptEngineer';

function Header() {
  return (
    <header className='bg-gypsydark-800 flex justify-between border-b border-mattepurp-500 px-4 py-2 text-gypsygold-500 items-center'>
      {/* Logo  */}
      <div className='flex space-x-4'>
        <Image src='/Logo.png' alt='logo image' width={35} height={35} />
        <Image src='/Gypsy.png' alt='text image' width={45} height={35} />
      </div>
      {/* Account  */}
      <AccountButton />
      {/* Prompt Engineer  */}
      <PromptEngineer />
      {/* Settings  */}
      <Settings />
    </header>
  );
}

export default Header;
