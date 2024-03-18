'use client';

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'



function Login() {
  return (
    <div className='bg-amber-950'>
    <div className="bg-amber-500/50 h-screen flex flex-col items-center justify-center text-center gap-2">
      <Image
        src='/GPT.png'
        alt='Gypsy Logo'
        height={200}
        width={200}
      />
      
      <button 
        onClick={() => signIn('google')} 
        
        className="bg-slate-700 text-slate-200 font-bold text-3xl motion-safe:animate-pulse p-2 py-3 rounded-md shadow-md hover:bg-slate-500 hover:text-slate-100 border-2 border-slate-600"        
      >
        Sign In to use Gypsy
      </button>
      
      <p className="text-slate-100 bg-slate-400/80 rounded-lg p-3 shadow-lg">This is a clone of ChatGPT, with enhanced features. You will need your own API Key to interact with this Application.</p>

    </div>
    </div>
  )
}

export default Login;