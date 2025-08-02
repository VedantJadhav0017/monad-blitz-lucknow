"use client"

import React from 'react'
import reportWebVitals from './reportWebVitals';
import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';

const page = () => {
    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);
  
    useEffect(() => {
      const peer = new Peer();
  
      peer.on('open', (id) => {
        setPeerId(id);
      });
  
      peer.on('call', (call) => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then(mediaStream => {
            currentUserVideoRef.current.srcObject = mediaStream;
            currentUserVideoRef.current.play();
            call.answer(mediaStream);
            call.on('stream', function (remoteStream) {
              remoteVideoRef.current.srcObject = remoteStream;
              remoteVideoRef.current.play();
              console.log(peerId);
            });
          })
          .catch(err => console.error('getUserMedia error:', err));
      });
  
      peerInstance.current = peer;
  
      return () => {
        peer.destroy(); // Clean up PeerJS connection when component unmounts
      };
    }, []);
  
    const call = async (remotePeerId) => {
      try {
        const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        currentUserVideoRef.current.srcObject = displayMediaStream;
        currentUserVideoRef.current.play();
  
        const call = peerInstance.current.call(remotePeerId, displayMediaStream);
  
        call.on('stream', (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      } catch (err) {
        console.error('Error starting screen sharing:', err);
      }
    };
  return (
    <div className="w-full flex flex-col">
      <h1 className='text-white text-lg font-medium font-satoshi'>Current user id is {peerId}</h1>
      <input type="text" className='w-30% align-middle' value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
      <button className='text-white text-xl font-semibold' onClick={() => call(remotePeerIdValue)}>Call</button>
      <div>
        <video ref={currentUserVideoRef} muted autoPlay />
      </div>
      <div>
        <video ref={remoteVideoRef} autoPlay />
      </div>
    </div>
  )
}
reportWebVitals();
export default page