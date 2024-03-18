'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className='bg-amber-950'>
      <div className='flex h-screen flex-col items-center justify-center gap-2 bg-amber-500/50 text-center'>
        <Image src='/GPT.png' alt='Gypsy Logo' height={200} width={200} />

        <button
          onClick={() => signIn('google')}
          className='rounded-md border-2 border-slate-600 bg-slate-700 p-2 py-3 text-3xl font-bold text-slate-200 shadow-md hover:bg-slate-500 hover:text-slate-100 motion-safe:animate-pulse'
        >
          Sign In to use Gypsy
        </button>

        <p className='rounded-lg bg-slate-400/80 p-3 text-slate-100 shadow-lg'>
          This is a clone of ChatGPT, with enhanced features. You will need your
          own API Key to interact with this Application.
        </p>
      </div>
    </div>
  );
}

export default Login;
