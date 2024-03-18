import {
  QuestionMarkCircleIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gray-700 px-5 text-amber-100'>
      {/* <div className="flex flex-col items-center bg-slate-600/40 p-5 rounded-xl drop-shadow-lg border border-slate-800/40"> */}
      <h1 className='mb-20 text-7xl font-bold'>GypsyGPT</h1>
      <Image
        src='/gypsy.png'
        alt='GypsyGPT'
        width={800}
        height={800}
        className='m-10'
      />

      <div className='flex space-x-2 text-center'>
        {/* Examples Box  */}
        <div className='rounded-lg border border-slate-600 bg-slate-800/40 p-3 shadow-lg shadow-slate-900'>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <QuestionMarkCircleIcon className='h-10 w-10 text-amber-500' />
            <h2 className='text-xl font-bold'>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>What tasks can GypsyGPT assist with?</p>
            <p className='infoText'>Explain how GypsyGPT works.</p>
            <p className='infoText'>
              What is the best way within which to interact with this tool?
            </p>
          </div>
        </div>

        {/* Capabilities Box  */}
        <div className='rounded-lg border border-slate-600 bg-slate-800/40 p-3 shadow-lg shadow-slate-900'>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <BoltIcon className='h-10 w-10 text-amber-500' />
            <h2 className='text-xl font-bold'>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>
              Remembers what user said earlier in the conversation.
            </p>
            <p className='infoText'>
              Allows user to provide follow-up corrections
            </p>
            <p className='infoText'>
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>

        {/* Limitations Box  */}
        <div className='rounded-lg border border-slate-600 bg-slate-800/40 p-3 shadow-lg shadow-slate-900'>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <ExclamationTriangleIcon className='h-10 w-10 text-amber-500' />
            <h2 className='text-xl font-bold'>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>
              May occasionally generate incorrect information
            </p>
            <p className='infoText'>
              May occasionally produce harmful instructions or biased content
            </p>
            <p className='infoText'>
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
