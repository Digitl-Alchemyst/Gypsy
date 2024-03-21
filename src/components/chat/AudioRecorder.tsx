'use client';

import { MicrophoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function AudioRecorder({ uploadAudio }: { uploadAudio: (blob: Blob) => void }) {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err: any) {
        alert(err.message);
      }
    } else {
      alert('The Media Recorder API is not supported by your browser.');
    }
  };

  
  return (
    <div className='flex items-center justify-center'>
      {!permission && (
        <button onClick={getMicrophonePermission}>Activate Microphone</button>
      )}
      {permission && (
        <>
          <Image
            src='/Microphone.png'
            width={45}
            height={45}
            alt='microphone'
            className='rounded-full'
          />
          <Image
            src='/Active.gif'
            width={45}
            height={45}
            alt='microphone'
            className='rounded-full'
          />
        </>
      )}
    </div>
  );
}

export default AudioRecorder;

