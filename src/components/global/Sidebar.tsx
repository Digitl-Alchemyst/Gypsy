/* eslint-disable @next/next/no-img-element */
'use client';

import NewChat from './NewChat';


function Sidebar() {
  
  return (
    <div className='flex h-screen flex-col p-2 border-r border-purple-400'>
      <div className='flex-1'>
        <div>
          <NewChat />

          {/* Model Selection */}

          {/* Map through the ChatRows */}
        </div>
      </div>      
    </div>
  );
}

export default Sidebar;
