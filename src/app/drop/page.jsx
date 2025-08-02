"use client";

import React from "react";

const Drop = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-purple-500 mb-4">Upcoming NFT Drops</h1>
      <p className="text-gray-400 mb-8 text-lg">
        Stay ahead with the latest NFT drops and exclusive launches.
      </p>

      {/* Drop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          {
            name: "Pixel Punks",
            date: "Aug 10, 2025",
            img: "https://ipfs.io/ipfs/QmV9waZphaSP15DnMVUsUCiyzMw16FpVHhTZX1sD8eNU6B/nft.png",
          },
          {
            name: "Cyber Apes",
            date: "Aug 15, 2025",
            img: "https://ipfs.io/ipfs/QmXq6S3UgHuyWA26LYc2jr5JYLPKRvHB94e3ugw9AqZuQs/nft.jpg",
          },
          {
            name: "Neon Samurai",
            date: "Aug 20, 2025",
            img: "https://ipfs.io/ipfs/QmPsgF6q5nPzgUbyqyViJL62ytbv5CErBwNAqDTmrfcodC/nft.jpg",
          },
        ].map((drop, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={drop.img} alt={drop.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-400">{drop.name}</h3>
              <p className="text-gray-400 text-sm">Drop Date: {drop.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drop;
