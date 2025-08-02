"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image'
import nft1 from '../../public/assets/nft.webp'
import Link from 'next/link'
import InfoBar from '../../components/InfoBar'
import Sidebar from '../../components/FeaturedSlider'
import TrendingSection from '../../components/TrendingSection'
import { Sliders } from 'lucide-react';

// import banner from 'https://ipfs.io/ipfs/QmYDYUEyCUZ17jsSzPxE6Ui1RP68STDrbdQrctFdtbArtH/nft.jpg';


const Home = () => {

  // connectToDB();
  return (
    <div className='w-full h-fit bg-black flex flex-col '>
      <div className='flex justify-start items-center gap-6 ml-24 pt-6 text-white'>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>All</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Art</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Gaming</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Membership</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>PFPs</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Photography</p></div>
        <div className='w-fit hover:bg-slate-800 rounded-lg px-4 py-2'><p className='logo_text'>Music</p></div>
      </div>

      {/* <div className='h-[30rem] rounded-2xl mx-12 my-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>

      </div> */}

      <div className='p-4'>
        <InfoBar />
      </div>

      <div className='flex justify-between items-center mx-24 my-4'>
        <div className='flex gap-4'>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Top</div>
        </div>
        <div className='flex gap-4'>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
        <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>Trending</div>
        </div>
      </div>
      <div className='text-white my-6 mx-24 text-3xl font-medium'>Trending NFT's</div>
      <div className="flex justify-start items-center mx-24 my-4 gap-12">
        {[
          {
            img: "https://ipfs.io/ipfs/QmV9waZphaSP15DnMVUsUCiyzMw16FpVHhTZX1sD8eNU6B/nft.png",
            title: "Pixel Punk #202",
            price: "0.75 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmXq6S3UgHuyWA26LYc2jr5JYLPKRvHB94e3ugw9AqZuQs/nft.jpg",
            title: "Cyber Ape #17",
            price: "1.25 ETH",
          },
          {
            img: nft1,
            title: "Exclusive NFT",
            price: "2.50 ETH",
            link: "/nft/1",
          },
          {
            img: "https://ipfs.io/ipfs/QmPsgF6q5nPzgUbyqyViJL62ytbv5CErBwNAqDTmrfcodC/nft.jpg",
            title: "Neon Samurai",
            price: "3.10 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmTcDBA3mKDLbQ2vsFmUJNhT3hH7vkLdNCV9tqAzs2uH6s/nft.png",
            title: "Galaxy Art",
            price: "0.95 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmdsCy2kxGTmQ891vZXcBWRphRTYmafNzwshkpyJRw4djc/nft.png",
            title: "Dark Warrior",
            price: "4.00 ETH",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-60 rounded-lg relative overflow-hidden"
          >
            {item.link ? (
              <Link href={item.link}>
                <Image
                  src={item.img}
                  fill
                  className="object-cover"
                  alt={item.title}
                />
              </Link>
            ) : (
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt={item.title}
              />
            )}
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-1">
              <h3 className="text-xs font-semibold">{item.title}</h3>
              <p className="text-[11px] text-green-400">{item.price}</p>
            </div>
          </div>
        ))}
      </div>


      <div className='text-white my-6 mx-24 text-3xl font-medium'>New Arrivals</div>
      <div className="flex justify-start items-center mx-24 my-4 gap-12">
        {[
          {
            img: "https://ipfs.io/ipfs/QmUtkt1kXmJtZJRtCw72mxjZh5hSFc8TSwygNwLnyR28eF/nft.png",
            title: "Crypto Avatar",
            price: "1.20 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmSTetdiBvxFV9TCog2gxcAVvbk3BGdwSNPfh1me4HM5w9/nft.png",
            title: "Pixel Warrior",
            price: "0.85 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmNeNRuAbftdNbdr9vNQe4VL5QsUkWmrGhG9triXikFSRV/nft.png",
            title: "Neon Punk",
            price: "2.50 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmTBxrj6G5gVD7m9SgGaH1vDMUjFZPru2QYKDMf2fQ7jjH/nft.jpg",
            title: "Samurai Shadow",
            price: "3.00 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/QmUtkt1kXmJtZJRtCw72mxjZh5hSFc8TSwygNwLnyR28eF/nft.png",
            title: "Space Voyager",
            price: "1.75 ETH",
          },
          {
            img: "https://ipfs.io/ipfs/Qmc68MaqRxCr3CisiL6cj3g8Jin5cnSzVjt5pRbXj1fXFw/nft.jpg",
            title: "Dark Phantom",
            price: "4.20 ETH",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-60 rounded-lg relative overflow-hidden"
          >
            {/* Image fully covers the card */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-2">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-green-400 text-xs">{item.price}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="min-h-screen bg-black text-white p-6 flex flex-col md:flex-row gap-6">
        {/* Left Side: Slider + Trending */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          <Sidebar />
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full md:w-1/4">
        <TrendingSection />
        </div>
      </div>

    </div>
  )
}

export default Home