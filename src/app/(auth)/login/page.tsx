'use client'
import Image from 'next/image';


export default function LoginPage() {
    return (
      <div className='mx-auto flex justify-center bg-gypsygold-700'>
        <div className='mx-auto flex h-screen w-full flex-col items-center justify-between gap-2 bg-gypsygold-500/60 py-12 text-center'>
          <div className='mt-44 flex flex-col items-center justify-center space-y-8'>
            <Image src='/Full.png' alt='Gypsy Logo' height={200} width={200} />
            <button
              onClick={() => signIn('google')}
              className='rounded-md border-2 border-mattepurp-600 bg-mattepurp-700 p-2 py-3 text-3xl font-bold text-gypsygold-200 shadow-md hover:bg-mattepurp-500 hover:text-gypsygold-100 motion-safe:animate-pulse'
            >
              Sign In to use Gypsy
            </button>
          </div>
          <p className='bg-darkpink-300 flex justify-center rounded-lg p-3 text-gypsygold-200 shadow-lg'>
            This is a clone of ChatGPT, with enhanced features. You will need
            your own API Key to interact with this Application.
          </p>
        </div>
      </div>
    );
}
