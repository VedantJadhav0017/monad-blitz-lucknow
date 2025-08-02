"use client";

import React from 'react'
import { CgSoftwareUpload } from "react-icons/cg";
import Link from 'next/link';

import MinterABI from '../../../artifacts/contracts/Mint.sol/Minter.json';
const abi = MinterABI.abi;

const MINT_PRICE = 0.1; // Ether


import Web3 from "web3";
import { useState, useRef } from "react";

const web3 = new Web3('http://127.0.0.1:7545');

let connetAddress;
let jsonCid;

const page = () => {

    const [connectedAccount, setConnectedAccount] = useState(false);

  const connectMetamask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setConnectedAccount(accounts[0]);
        connetAddress = accounts[0];
        console.log(accounts[0]); // Logging the address
        document.getElementById('add').innerHTML = connetAddress;
      } catch (error) {
        console.error("Error connecting Metamask:", error);
      }
    } else {
      alert("Please download Metamask");
    }
  };

  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const inputFile = useRef(null);

  const uploadFile = async (fileToUpload) => {
    try {
      console.log('fileToUpload:', fileToUpload); // Debug log
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("../api/files", {
          method: "POST",
          body: data,
      });
      console.log('res:', res); // Debug log
      const resData = await res.json();
      console.log('resData:', resData); // Debug log
      await setCid(resData.ipfsHash);
      jsonCid = cid;
      console.log(cid); // Debug log
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
      setIsMinting(true);
      try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          const minterContract = new web3.eth.Contract(abi, '0xb4AA21806FB1858eecb643bC959D11ea377801be');

          // Address to mint the token to
          const toAddress = accounts[0];

          // URI for the token
          const tokenURI = jsonCid;

          // Call the safeMint function
          const tx = await minterContract.methods.safeMint(toAddress, tokenURI).send({ from: toAddress, value: Web3.utils.toWei(MINT_PRICE.toString(), 'ether'),gas:50000 });
          console.log('Token minted successfully. Transaction hash:', tx.transactionHash);
      } catch (error) {
          console.error('Error minting token:', error);
      }
      setIsMinting(false);
  };



  return (
    <div className='w-full h-screen bg-black flex justify-start items-center'>
      <div className='w-1/2 h-3/4 flex flex-col items-center justify-center mx-20'>
        <div className='justify-start'>
       <h1 className='text-white text-4xl font-semibold'>Create and NFT</h1>
       <p className='text-white py-4 text-lg font-medium'>Once your item is minted you will not be able to change any of its information.</p>
       </div>
       <div className='w-[70%] h-[80%] outline-dashed outline-2 outline-offset-2 outline-slate-700 rounded-lg my-8 flex flex-col justify-center items-center hover:bg-zinc-900'>
       <CgSoftwareUpload className='text-white w-12 h-12' />
       <p className='text-white font-medium text-lg pt-4'>Drag and drop media</p>
       <input type="file" id="file" ref={inputFile} onChange={(e) => uploadFile(e.target.files[0])} className='bg-transparent text-blue-500' />
       {/* <p className='text-blue-500'>Browse files</p> */}
       <p className='text-white text-sm opacity-70 pt-2'>Max size : 50MB</p>
       <p className='text-white text-sm opacity-70'>JPG, PNG, GIF, SVG, MP4</p>
       </div>
      </div>

      <div className='w-1/2 h-max flex flex-col justify-center items-start'>
      <p className='text-white text-lg font-semibold px-2'>Collection *</p>
        <div className='w-[70%] h-24 px-2 py-2 bg-zinc-900 rounded-xl my-2 hover:bg-zinc-800'>
          
        </div>
        <button disabled={uploading} onClick={() => inputFile.current.click()}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {/* {cid && (
        <img
          src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`}
          width={200}
          height={200}
          alt="Image from IPFS"
        />
        
      )} */}
      <div>
  {/* <p className='text-white'>The CID of the uploaded file is: {cid}</p> */}
</div>
        {/* <p className='text-white text-sm opacity-60 px-2'>Not all collections are eligible. <span className='text-blue-500'>Learn more</span></p>
        <p className='text-white text-lg font-semibold px-2 pt-12 pb-4'>Name *</p>
        <input type="text" placeholder="Name your NFT" required className="search_input_trans_create peer" />
        <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Supply *</p>
        <input type="text" placeholder="1" required className="search_input_trans_create peer" />
        <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Description</p>
        <textarea type="text" placeholder="Search..." required className="search_input_trans_create peer" />
        <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>External links</p>
        <input type="text" placeholder="https://collection.io/123" required className="search_input_trans_create peer" /> */}
        <div className='w-[70%] flex justify-end items-center py-12 '><button className='blue_btn'>Create</button></div>
        <div className='w-[70%] flex justify-end items-center py-12 '><button className='blue_btn' onClick={handleMint} disabled={isMinting}>
            {isMinting ? 'Minting...' : 'Mint Token'}
        </button>
</div>
      </div>
      
    </div>
  )
}

export default page