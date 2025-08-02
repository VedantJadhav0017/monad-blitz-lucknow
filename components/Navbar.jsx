"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { useRouter } from "next/router";
import connectToDB from "../utils/database";
import page from "../src/app/select-create/page";

const Nav = () => {

  const[connected, setconnected] = useState(false);
  const[connectedAccount,setConnectedAccount] = useState('');
  const[id,setId] = useState(null);

  const connectMetamask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setconnected(true);
        setConnectedAccount(accounts[0]);
        const displayAddress = accounts[0]?.substr(0,7)+"..."
        setId(displayAddress);
      } catch (error) {
        console.error("Error connecting Metamask:", error);
      }
    } else {
      alert("Please download Metamask");
    }
  };

  return (
    <nav className="flex-between w-full pb-4 pt-4 gap-10 pl-24 pr-24 bg-zinc-900 text-white">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text text-2xl">Noktua</p>
      </Link>
      <div className="flex-between gap-8">
        <Link href='/'><p className="logo_text">Home</p></Link>
        <Link href='/drop'><p className="logo_text">Drop</p></Link>
        <Link href='/stats'><p className="logo_text">Stats</p></Link>
        <Link href='/store'><p className="logo_text">Store</p></Link>
        <Link href='/select-create'><p className="logo_text">Create</p></Link>
      </div>
      <input type="text" placeholder="Search..." required className="search_input30 peer mr-24" />
      {connected ? (
  <button className="black_btn"onClick={connectMetamask} >
    {id}
  </button>
) : (
  <button className="black_btn" onClick={connectMetamask}>
    Connect to Metamask
  </button>
)}

      <Link href='/profile'> <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-full"></div></Link>
    </nav>
  );
};

export default Nav;