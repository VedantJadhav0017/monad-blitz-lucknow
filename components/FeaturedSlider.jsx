import React from "react";

const trendingTokens = [
  {
    image: "/assets/hotstuff.png",
    title: "Ordinal Maxi Biz",
    sub: "BTC",
  },
  {
    image: "/assets/hotstuff2.png",
    title: "DeGods",
    sub: "SOL",
  },
  {
    image: "/assets/hotstuff3.png",
    title: "Mad Lads",
    sub: "SOL",
  },
  {
    image: "/assets/city1.png",
    title: "Pudgy Penguins",
    sub: "ETH",
  },
  {
    image: "/assets/city2.png",
    title: "Milady Maker",
    sub: "ETH",
  },
  {
    image: "/assets/planet1.png",
    title: "Milady Maker",
    sub: "ETH",
  },
];

const nft101Cards = [
  {
    title: "What is an NFT?",
    bg: "bg-blue-500",
    image: "/assets/faq.png", // Replace with actual image paths
  },
  {
    title: "How to buy an NFT",
    bg: "bg-yellow-400",
    image: "/assets/faq2.png",
  },
  {
    title: "What is minting?",
    bg: "bg-green-500",
    image: "/assets/faq3.png",
  },
];

export default function FeaturedSlider() {
  return (
    <div className="w-full bg-black py-6 pl-12 pr-6">
      {/* Trending Collections Section */}
      <h2 className="text-white text-3xl font-semibold mb-4">
        Trending Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {trendingTokens.map((token, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl p-3 pl-4 hover:scale-105 transition-transform"
          >
            <img
              src={token.image}
              alt={token.title}
              className="w-full h-20 rounded-lg object-cover mb-2"
            />
            <h3 className="text-white text-sm font-semibold">{token.title}</h3>
            <p className="text-green-400 text-xs">{token.sub}</p>
          </div>
        ))}
      </div>

      {/* NFT 101 Section */}
      <h2 className="text-white text-3xl font-semibold mb-4">NFT 101</h2>
      <p className="text-gray-400 text-sm mb-6">Learn about NFTs, Web3, and more.</p>
      <div className="flex flex-wrap gap-4">
        {nft101Cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-2xl p-4 w-full sm:w-[300px] h-[220px] flex flex-col justify-between hover:scale-105 transition-transform`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-32 rounded-lg object-cover"
            />
            <h3 className="text-white text-lg font-semibold mt-2">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
