import React from 'react'
import Image from 'next/image';
import { FaSailboat } from "react-icons/fa6";
import { BsBoxes } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";

import nft2 from '../../../public/assets/SpaceCity2.jpeg';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-start items-center'>
        <div className='w-[50%] flex-col justify-center items-start px-20'>
            <div className='w-full flex justify-start items-center gap-6'>
                <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center'><FaSailboat className='w-6 h-6' /></div>
                <h1 className='text-white text-bold font-satoshi text-5xl  '>Create</h1>
            </div>
            <div className='w-[90%] h-28 flex-col justify-center items-start rounded-lg bg-zinc-900 my-10 py-4 px-6'>
                <div className='w-full flex justify-start items-center gap-4'>
                <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center'><BsBoxes className='text-white w-4 h-4' /></div>
                    <p className='text-white font-satoshi text-2xl font-semibold'>Drop a collection</p>
                </div>
                <p className='text-white px-2 py-4 text-md font-medium'>Launch you NFT collection for others to mint. </p>
            </div>
            <Link href='/code-upload'>
            <div className='w-[90%] h-28 flex-col justify-center items-start rounded-lg bg-zinc-900 my-10 py-4 px-6'>
                <div className='w-full flex justify-start items-center gap-4'>
                <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center'><RiGalleryFill className='text-white w-4 h-4' /></div>
                    <p className='text-white font-satoshi text-2xl font-semibold'>Mint an NFT</p>
                </div>
                <p className='text-white px-2 py-4 text-md font-medium'>Create a collection and mint NFT's directly to your wallet</p>
            </div>
            </Link>
        </div>
        <div className="w-[50%] h-full relative">
            <Image src={nft2} layout="fill" objectFit="cover" alt='nft'  />
        </div>
    </div>
  )
}

export default page;