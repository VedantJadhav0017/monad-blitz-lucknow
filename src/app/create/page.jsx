"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CgSoftwareUpload } from "react-icons/cg";
import Link from 'next/link'

const Page = () => {

  const inputFile = useRef(null);
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    supply: '1',
    description: '',
    externalLink: '',
    image: ''
  });

  useEffect(() => {
    // Concatenate gateway URL and CID and set it directly in formData
    const imageUrl = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/${cid}`;
    setFormData(prevState => ({
      ...prevState,
      image: imageUrl
    }));
  }, [cid]);

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("../api/files", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    console.log("JSON Data:", jsonData);

    const blob = new Blob([jsonData], { type: 'application/json' });
    console.log("Blob created:", blob);

    const url = URL.createObjectURL(blob);
    console.log("URL created:", url);

    // Download the JSON file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formData.json';
    document.body.appendChild(link);
    link.click();
    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <div className='w-full h-screen bg-black flex justify-start items-center'>
      <div className='w-1/2 h-3/4 flex flex-col items-center justify-center mx-20'>
        <div className='justify-start'>
          <h1 className='text-white text-4xl font-semibold'>Create an NFT</h1>
          <p className='text-white py-4 text-lg font-medium'>Once your item is minted, you will not be able to change any of its information.</p>
        </div>
        <div className='w-[70%] h-[80%] outline-dashed outline-2 outline-offset-2 outline-slate-700 rounded-lg my-8 flex flex-col justify-center items-center hover:bg-zinc-900'>
          <CgSoftwareUpload className='text-white w-12 h-12' />
          <p className='text-white font-medium text-lg pt-4'>Drag and drop media</p>
          <input type="file" id="file" ref={inputFile} onChange={(e) => uploadFile(e.target.files[0])} className='bg-transparent text-blue-500' />
          <p className='text-white text-sm opacity-70 pt-2'>Max size: 50MB</p>
          <p className='text-white text-sm opacity-70'>JPG, PNG, GIF, SVG, MP4</p>
        </div>
      </div>

      <div className='w-1/2 h-max flex flex-col justify-center items-start'>
        <p className='text-white text-lg font-semibold px-2'>Collection *</p>
        <div className='w-[70%] h-24 px-2 py-2 bg-zinc-900 rounded-xl my-2 hover:bg-zinc-800'></div>
        <button disabled={uploading} onClick={() => inputFile.current.click()}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
        <div>
          {/* <p className='text-white'>The CID of the uploaded file is: {cid}</p> */}
        </div>
        <form onSubmit={handleSubmit}>
          <p className='text-white text-sm opacity-60 px-2'>Not all collections are eligible. <span className='text-blue-500'>Learn more</span></p>
          <p className='text-white text-lg font-semibold px-2 pt-12 pb-4'>Name *</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name your NFT"
            required
            className="search_input_trans_create peer"
            onChange={handleChange}
          />
          {/* <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Supply *</p>
          <input
            type="text"
            name="supply"
            value={formData.supply}
            placeholder="1"
            required
            className="search_input_trans_create peer"
            onChange={handleChange}
          /> */}
          <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>Description</p>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            placeholder="Search..."
            required
            className="search_input_trans_create peer"
            onChange={handleChange}
          />
          <p className='text-white text-lg font-semibold px-2 pt-8 pb-4'>External links</p>
          <input
            type="text"
            name="externalLink"
            value={formData.externalLink}
            placeholder="https://collection.io/123"
            required
            className="search_input_trans_create peer"
            onChange={handleChange}
          />
          <div className='w-[70%] flex justify-end items-center py-12 '>
            <button className='blue_btn' type="submit">Create</button>
            <Link href='/upload-json'><button className='blue_btn'>Next</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
