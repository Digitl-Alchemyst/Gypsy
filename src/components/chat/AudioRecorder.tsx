'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';

export const mimeType = 'audio/webm';
function AudioRecorder({ uploadAudio }: { uploadAudio: (blob: Blob) => void }) {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const { pending } = useFormStatus();
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

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

  const startRecording = async () => {
    if (stream === null || pending) return;

    setRecordingStatus('recording');

    //Create a new media recorder instance using the audioStream
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();

    let localAudioChunks: Blob[] = [];

    mediaRecorder.current.ondataavailable = (e) => {
      if (typeof e.data === 'undefined') return;
      if (e.data.size === 0) return;

      localAudioChunks.push(e.data);
    };

    setAudioChunks(localAudioChunks);
  };

  const stopRecording = async () => {
    if (mediaRecorder.current === null || pending) return;
    setRecordingStatus('inactive');
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, {
        type: mimeType,
      });
      const audioUrl = URL.createObjectURL(audioBlob);
      uploadAudio(audioBlob);
      setAudioChunks([]);
    };
  }
  return (
    <div className='flex items-center justify-center'>
      {/* No Microphone Permissions  */}
      {!permission && (
        <button onClick={getMicrophonePermission}>Activate Microphone</button>
      )}

      {/* Audio submission is pending */}
      {pending && (
        <Image
          src='/Inactive.png'
          width={45}
          height={45}
          alt='microphone'
          priority
          className='rounded-full grayscale'
        />
      )}

      {/* If microphone has permission and is not pending and its recording status is inactive, display the microphone button */}
      {permission && recordingStatus === 'inactive' && !pending && (
        <Image
          src='/Microphone.png'
          width={45}
          height={45}
          alt='microphone'
          priority={true}
          onClick={startRecording}
          className='cursor-pointer rounded-full transition-all duration-150 ease-in-out hover:scale-110'
        />
      )}

      {/* If the recordingStatus is recording, display the recording active gif button with stop recording functionality */}
      {recordingStatus === 'recording' && (
        <Image
          src='/Active.gif'
          width={45}
          height={45}
          alt='microphone'
          priority={true}
          onClick={stopRecording}
          className='cursor-pointer rounded-full transition-all duration-150 ease-in-out hover:scale-110'
        />
      )}
    </div>
  );
}

export default AudioRecorder;
