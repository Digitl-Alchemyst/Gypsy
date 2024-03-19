import { MicrophoneIcon } from '@heroicons/react/24/outline';
import React from 'react'

function AudioRecorder() {
  return (
    <button
      className='my-1 h-12 rounded-lg border border-mattepurp-600 bg-gypsypurp-600 px-3 py-2 font-bold text-gypsypink-400 shadow-lg hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gypsypurp-400 disabled:text-gypsypink-600'
    >
      <MicrophoneIcon className='h-7 w-7' />
    </button>
  );
}

export default AudioRecorder