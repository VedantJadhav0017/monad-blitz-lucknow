"use client";
import React, { useState } from "react";
import Image from "next/image";

const ServiceData = [
  {
    id: 1,
    title: "Azuki Mizuki Anime Shorts",
    creator: "MizukiDeployer",
    status: "Minting",
    mintPrice: "$4.96",
    totalItems: "Open Edition",
    itemsMinted: "15,065",
    background: "/assets/hotstuff.png",
  },
  {
    id: 2,
    title: "Yokai Genesis NFT Drop",
    creator: "YokaiLabs",
    status: "Upcoming",
    mintPrice: "$6.50",
    totalItems: "3,000",
    itemsMinted: "2,312",
    background: "/assets/hotStuff2.png",
  },
  {
    id: 3,
    title: "Samurai Pixel Art",
    creator: "RoninStudios",
    status: "Live",
    mintPrice: "$3.00",
    totalItems: "10,000",
    itemsMinted: "9,826",
    background: "/assets/hotstuff3.png",
  },
];

const InfoBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = ServiceData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ServiceData.length) % ServiceData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ServiceData.length);
  };

  return (
    <div className="w-full h-[600px] flex justify-center items-center bg-black px-4">
      <div className="relative w-full max-w-6xl h-full flex rounded-3xl overflow-hidden border-4 border-zinc-700">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${slide.background})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

        {/* Left/Right Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
        >
          ▶
        </button>

        {/* Content */}
        <div className="relative z-10 flex h-full w-full">
          {/* Left Side Text */}
          <div className="flex-1 flex flex-col justify-start p-10 text-white">
            {/* Title & Creator */}
            <div className="space-y-2 mb-auto">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-sm text-gray-300">
                By {slide.creator}
                <span className="text-blue-400 ml-1">✔️</span>
              </p>
            </div>

            {/* Bottom Floating Info Card */}
            <div className="absolute bottom-8 left-8 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-sm text-white w-[320px] shadow-lg">
              <div className="flex justify-between pb-3 border-b border-white/20">
                <div>
                  <p className="text-gray-400 text-xs">STATUS</p>
                  <p className="font-bold flex items-center gap-1">
                    {slide.status}
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">MINT PRICE</p>
                  <p className="font-bold">{slide.mintPrice}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">TOTAL ITEMS</p>
                  <p className="font-bold">{slide.totalItems}</p>
                </div>
              </div>
              <div className="pt-3 flex justify-between">
                <p className="text-white font-bold">ITEMS MINTED</p>
                <p className="text-gray-400">{slide.itemsMinted}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
