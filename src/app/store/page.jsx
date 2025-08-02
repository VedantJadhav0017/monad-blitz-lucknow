"use client";

import { useState } from "react";
import connectToDB from "../../../utils/database";
import Web3 from "web3";

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState(''); // State for Metamask address

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const connectMetamask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
      } catch (error) {
        console.error("Error connecting Metamask:", error);
        return [];
      }
    } else {
      alert("Please download Metamask");
      return [];
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = await connectMetamask();
    console.log(address);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, address }), 
      });

      if (response.ok) {
        alert('User created successfully!');
        setUsername('');
        setAddress('');
      } else {
        console.error('Failed to create user:', response.statusText);
        alert('Error creating user. Please try again.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user. Please try again.');
    }
  };

  // ✅ NFT Data
  const nftListings = [
    {
      id: 1,
      name: "CyberPunk #101",
      description: "Exclusive cyberpunk NFT with rare traits.",
      price: "0.5 ETH",
      image: "/assets/nft1.png",
    },
    {
      id: 2,
      name: "PixelArt #202",
      description: "Unique pixel art NFT, only 100 in existence.",
      price: "0.8 ETH",
      image: "/assets/nft1.avif",
    },
    {
      id: 3,
      name: "Abstract #303",
      description: "Abstract digital art collectible.",
      price: "1.2 ETH",
      image: "/assets/nft.webp",
    },
  ];

  const faqs = [
    {
      question: "What is an NFT?",
      answer:
        "NFT stands for Non-Fungible Token, a unique digital asset stored on blockchain.",
    },
    {
      question: "How do I buy an NFT?",
      answer:
        "You can buy NFTs using cryptocurrency like Ethereum through marketplaces.",
    },
    {
      question: "Is it safe to buy NFTs?",
      answer:
        "NFTs are stored on blockchain, which is secure, but always verify authenticity.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10">
      {/* NFT Section Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-500 mb-4">
          Explore Exclusive NFTs
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Discover, collect, and own rare digital assets. Each NFT is unique and
          securely stored on the blockchain.
        </p>
      </section>
  
      {/* NFT Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {nftListings.map((nft) => (
          <div
            key={nft.id}
            className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition p-4"
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-green-400">
              {nft.name}
            </h2>
            <p className="text-gray-400 mt-2">{nft.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-purple-400">
                {nft.price}
              </span>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
  
      {/* NFT Details Section */}
      <section className="mt-16 bg-gray-900 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-500 mb-4">About NFTs</h2>
        <p className="text-gray-300 leading-relaxed">
          NFTs are unique digital collectibles that use blockchain technology to
          ensure ownership and authenticity. Each NFT is non-fungible, meaning
          it cannot be replaced by another asset. They can represent art,
          music, videos, and more. Owning an NFT gives you verifiable proof of
          ownership and often grants access to exclusive content or perks.
        </p>
      </section>
  
      {/* FAQ Section */}
      <section className="mt-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                {faq.question}
              </h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );  
};

export default CreateUser;
