/* eslint-disable @next/next/no-img-element */
'use client';

import AccountButton from '../auth/AccountButton';
import NewChat from './NewChat';


function Sidebar() {
  
  return (
    <div className='flex h-screen flex-col  border-r border-purple-400 p-2'>
      <div className='flex justify-between flex-col h-full'>
        <div className='flex-1'>
          <NewChat />

          {/* Model Selection */}

          {/* Map through the ChatRows */}
        </div>
        {/* Account Button  */}
        <AccountButton />
      </div>
    </div>
  );
}

export default Sidebar;
