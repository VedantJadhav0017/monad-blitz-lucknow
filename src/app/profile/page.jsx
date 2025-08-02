"use client";

import React, { useState, useEffect } from 'react';
import Profile from '../../../components/Profile';
import { FaPencilAlt } from "react-icons/fa";
import Web3 from "web3";

const Page = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const connectMetamask = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setAddress(accounts[0]);
          console.log(accounts[0]); // Log the address directly, as state update might not be immediate
          return accounts[0];
        } catch (error) {
          console.error("Error connecting Metamask:", error);
          return [];
        }
      } else {
        alert("Please download Metamask");
        return [];
      }
    };

    connectMetamask();
  }, []); // Run the effect only once when the component mounts

  return (
    <div className='w-full h-screen bg-zinc-900'>
        <div className='w-full h-[35%] bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center'>
          <div className='text-white opacity-70'><FaPencilAlt /></div>
        </div>
        <Profile username="My Profile" address={address} />
    </div>
  );
};

export default Page;
