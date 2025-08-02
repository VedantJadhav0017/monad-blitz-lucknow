"use client";

import React from 'react';

const realTokenNames = [
  "Ethereum", "Solana", "Bitcoin", "Avalanche", "Polygon",
  "Arbitrum", "Optimism", "Dogecoin", "Cardano", "Polkadot",
  "Chainlink", "Uniswap", "Aave", "Sui", "Render",
  "Toncoin", "Fantom", "Near Protocol", "Stacks", "Sei",
  "Mina", "Gala", "Helium", "Blur", "Magic",
  "Ribbit", "Kori", "Joe Coin", "Hosico Cat", "Troll Token"
];

const tokenData = realTokenNames.map((name) => ({
  name,
  price: `$${(Math.random() * 0.5 + 0.01).toFixed(4)}`,
  change1h: `${(Math.random() * 10 - 5).toFixed(1)}%`,
  change1d: `${(Math.random() * 100 - 20).toFixed(1)}%`,
  volume1d: `$${(Math.random() * 100 + 1).toFixed(1)}M`,
  marketCap: `$${(Math.random() * 200 + 10).toFixed(1)}M`,
  supply: `${Math.floor(Math.random() * 100)}%`,
}));

const TrendingTokens = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col p-6">
      <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
          <h1 className="text-3xl font-bold text-white">Trending NFT'S</h1>
          <div className="flex space-x-4 text-gray-400">
            <button className="hover:text-white">Trending</button>
            <button className="hover:text-white">Top</button>
            <button className="hover:text-white">New</button>
          </div>
        </div>

        {/* Scrollable Table Container */}
        <div className="flex-1 overflow-y-auto pr-2">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 text-gray-400 text-sm border-b border-gray-800 pb-2 sticky top-0 bg-black z-10">
            <span>Token</span>
            <span>Price</span>
            <span>1H Change</span>
            <span>1D Change</span>
            <span>1D Volume</span>
            <span>Market Cap</span>
            <span>Supply</span>
          </div>

          {/* Table Rows */}
          {tokenData.map((token, index) => (
            <div
              key={index}
              className="grid grid-cols-7 gap-4 py-3 border-b border-gray-900 hover:bg-gray-900/30 transition"
            >
              <span className="text-white font-semibold">{token.name}</span>
              <span>{token.price}</span>
              <span className={token.change1h.includes('-') ? 'text-red-400' : 'text-green-400'}>
                {token.change1h}
              </span>
              <span className={token.change1d.includes('-') ? 'text-red-400' : 'text-green-400'}>
                {token.change1d}
              </span>
              <span>{token.volume1d}</span>
              <span>{token.marketCap}</span>
              <span>{token.supply}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTokens;
