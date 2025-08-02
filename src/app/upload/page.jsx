"use client";
import Web3 from "web3";
import { useState, useRef } from "react";

const web3 = new Web3('http://127.0.0.1:7545');

let connetAddress;

const Mid = () => {
  const [connectedAccount, setConnectedAccount] = useState(false);

  const connectMetamask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setConnectedAccount(accounts[0]);
        connetAddress = accounts[0];
        console.log(accounts[0]); // Logging the address
        document.getElementById('add').innerHTML = connetAddress;
      } catch (error) {
        console.error("Error connecting Metamask:", error);
      }
    } else {
      alert("Please download Metamask");
    }
  };

  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const inputFile = useRef(null);

  const uploadFile = async (fileToUpload) => {
    try {
      console.log('fileToUpload:', fileToUpload); // Debug log
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("../api/files", {
          method: "POST",
          body: data,
      });
      console.log('res:', res); // Debug log
      const resData = await res.json();
      console.log('resData:', resData); // Debug log
      await setCid(resData.ipfsHash);
      console.log(cid); // Debug log
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  return (
    <div>
      <button onClick={connectMetamask}>Connect MetaMask</button>
      <p id="add"></p>
      <input type="file" id="file" ref={inputFile} onChange={(e) => uploadFile(e.target.files[0])} />
      <button disabled={uploading} onClick={() => inputFile.current.click()}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {cid && (
        <img
          src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`}
          alt="Image from IPFS"
        />
        
      )}
      
<div>
  <p>The CID of the uploaded file is: {cid}</p>
</div>
      
    </div>
    
  );
};

export default Mid;
