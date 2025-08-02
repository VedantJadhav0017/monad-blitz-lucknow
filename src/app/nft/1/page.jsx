"use client";

import React, { useState } from "react";
import Image from "next/image";
import nft1 from "../../../../public/assets/nft.webp";

const nftData = {
  title: "PRNS#5428",
  owner: "Robin",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  priceEth: "0.328",
  priceUsd: "$1,087.36",
  saleEnd: "7 April 2024 9:00 AM",
  contractAddress: "0xabab...81",
  tokenId: "5428",
  chain: "Sepholia",
  uploaded: "5 April 2024",
  image: nft1,
};

const nftTraits = [
  { label: "Contract Address", value: nftData.contractAddress },
  { label: "Token ID", value: nftData.tokenId },
  { label: "Chain", value: nftData.chain },
  { label: "Uploaded", value: nftData.uploaded },
];

export default function NFTDetails() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully!");
    setVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error("Video failed to load:", e.target.error);
    console.log("Trying to load:", e.target.currentSrc);
    setVideoLoaded(false);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8 flex flex-col md:flex-row gap-10">
      {/* Left - NFT Image with Flip Effect */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg h-96 perspective-1000">
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={handleCardFlip}
          >
            {/* Front of the card - NFT Image */}
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <Image
                src={nftData.image}
                alt={nftData.title}
                className="rounded-xl w-full h-full object-cover border border-gray-700"
              />
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>

            {/* Back of the card - Video */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
              <div className="w-full h-full bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden">
                {/* Video */}
                <video
                  className={`w-full h-full object-cover rounded-xl ${videoLoaded ? 'block' : 'hidden'}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadStart={() => console.log("Video loading started...")}
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                  onCanPlay={() => console.log("Video can start playing")}
                  onPlay={() => console.log("Video started playing")}
                >
                  <source src="/assets/nft-animation.mp4" type="video/mp4" />
                  <source src="/assets/nft-animation.webm" type="video/webm" />
                </video>
                
                {/* Animated fallback when video is not available or loading */}
                {!videoLoaded && (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        {/* Animated NFT placeholder */}
                        <div className="w-32 h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg mx-auto mb-4 animate-pulse shadow-2xl"></div>
                        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mx-auto animate-ping opacity-20"></div>
                      </div>
                      <p className="text-white text-lg font-semibold">Loading Video...</p>
                      <p className="text-gray-200 text-sm mt-2">nft-animation.mp4</p>
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - NFT Details */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{nftData.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="text-blue-400 font-semibold">NFT</span>
          <span>• Owned by {nftData.owner}</span>
          <span className="ml-auto text-xs bg-gray-800 px-2 py-1 rounded">
            👈 Click image to flip
          </span>
          {/* Debug link */}
          <a 
            href="/assets/nft-animation.mp4" 
            target="_blank" 
            className="text-xs bg-red-600 px-2 py-1 rounded text-white hover:bg-red-500"
          >
            Test Video
          </a>
        </div>

        {/* Price and Sale Info */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">SALE ENDS ON</p>
          <p className="text-white font-semibold">{nftData.saleEnd}</p>
          <div className="h-[1px] w-full bg-gray-600 my-4"></div>
          <p className="text-gray-400">CURRENT PRICE</p>
          <p className="text-white text-2xl font-semibold">
            {nftData.priceEth} ETH{" "}
            <span className="text-gray-400 text-sm">{nftData.priceUsd}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg">
            Buy Now
          </button>
          <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg">
            Make Offer
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 border-b border-gray-700 pb-2 text-sm">
          <span className="text-white font-semibold border-b-2 border-white pb-1">
            Details
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer">
            Orders
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer">
            Activity
          </span>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-gray-400 mb-2">Description</p>
          <p>{nftData.description}</p>
        </div>

        {/* Traits */}
        <div className="mt-4">
          <p className="text-white font-semibold mb-4">Traits</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nftTraits.map((trait, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-lg p-4">
                <p className="text-gray-400 text-xs">{trait.label}</p>
                <p className="text-white font-semibold text-md">
                  {trait.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
