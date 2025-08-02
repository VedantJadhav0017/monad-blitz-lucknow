import pinataSDK from '@pinata/sdk';
import fs from 'fs';

const pinata = new pinataSDK('8d5cadf371bda7701294', '7d0fc33abadd782b2d8dc77d3cb6a18106b96801b6c448e36d443582ab62e198');

export const uploadFileToIPFS = async (filePath) => {
    try {
        const readableStreamForFile = fs.createReadStream(filePath);
        const options = {
            pinataMetadata: {
                name: 'My File',
                // You can add more metadata here
            },
        };
        const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
        return result.IpfsHash;
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error;
    }
};