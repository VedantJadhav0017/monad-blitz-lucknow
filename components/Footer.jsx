import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MdSupport } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const Footer = () => {
  return (
<div className="w-full px-4 py-2 bg-[#0e0e0e] text-white flex flex-wrap justify-between items-center text-sm font-light border-t border-gray-800">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-green-400">● Live</span>
        <span className="flex items-center gap-1">⚡ Aggregating</span>
        <span className="flex items-center gap-1">📡 Networks</span>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <FaDiscord className="text-xl cursor-pointer hover:text-indigo-400" />
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <span>Ξ $3,528.59</span>
        <span>⛽ 0.54 GWEI</span>
        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <MdSupport />
          <span>Support</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 flex-wrap">
        <button className="p-1 hover:text-yellow-400">
          <BsFillSunFill />
        </button>
        <button className="p-1 hover:text-purple-400">
          <BsFillMoonStarsFill />
        </button>
        <span className="bg-gray-800 px-2 py-1 rounded-md">Collector</span>
        <span className="text-gray-400">Pro</span>
        <span className="text-gray-400 cursor-pointer hover:text-white">Crypto</span>
        <span className="bg-gray-800 px-2 py-1 rounded-md">USD</span>
        <FiSettings className="cursor-pointer hover:text-white" />
      </div>
    </div>
  )
}

export default Footer