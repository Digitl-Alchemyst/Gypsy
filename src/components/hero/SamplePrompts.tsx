import {
  QuestionMarkCircleIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

const SamplePrompts = () => {
  return (
    <div className='flex space-x-2 text-center'>
      {/* Examples Box  */}
      <div className='rounded-lg border border-mattepurp-600 bg-darkpurp-800/40 p-3 shadow-lg shadow-mattepurp-900'>
        <div className='mb-2 flex flex-col items-center justify-center'>
          <QuestionMarkCircleIcon className='h-8 w-8 text-gypsygold-500' />
          <h2 className='text-xl font-bold text-gypsygold-200'>Examples</h2>
        </div>

        <div className='space-y-1 text-gypsygold-100'>
          <p className='infoText'>What tasks can GypsyGPT assist with?</p>
          <p className='infoText'>Explain how GypsyGPT works.</p>
          <p className='infoText'>
            What is the best way within which to interact with this tool?
          </p>
        </div>
      </div>

      {/* Capabilities Box  */}
      <div className='rounded-lg border border-mattepurp-600 bg-darkpurp-800/40 p-3 shadow-lg shadow-mattepurp-900'>
        <div className='mb-2 flex flex-col items-center justify-center'>
          <BoltIcon className='h-8 w-8 text-gypsygold-500' />
          <h2 className='text-xl font-bold text-gypsygold-200'>Capabilities</h2>
        </div>

        <div className='space-y-1 text-gypsygold-100'>
          <p className='infoText'>
            Remembers what user said earlier in the conversation.
          </p>
          <p className='infoText'>
            Allows user to provide follow-up corrections
          </p>
          <p className='infoText'>Trained to decline inappropriate requests</p>
        </div>
      </div>

      {/* Limitations Box  */}
      <div className='rounded-lg border border-mattepurp-600 bg-darkpurp-800/40 p-3 shadow-lg shadow-mattepurp-900'>
        <div className='mb-2 flex flex-col items-center justify-center'>
          <ExclamationTriangleIcon className='h-8 w-8 text-gypsygold-500' />
          <h2 className='text-xl font-bold text-gypsygold-200'>Limitations</h2>
        </div>

        <div className='space-y-1 text-gypsygold-100'>
          <p className='infoText'>
            May occasionally generate incorrect information
          </p>
          <p className='infoText'>
            May occasionally produce harmful instructions or biased content
          </p>
          <p className='infoText'>
            Limited knowledge of world events after 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default SamplePrompts;
