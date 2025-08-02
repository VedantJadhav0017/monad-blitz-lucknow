import { uploadFileToIPFS } from '../../servises/pinataService';
import { Formidable } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new Formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the file' });
        return;
      }

      // Check if a file was uploaded
      if (!files.file || files.file.length === 0) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
      }

      // Get the first uploaded file
      const file = files.file[0];
      const filePath = file.filepath;

      try {
        const ipfsHash = await uploadFileToIPFS(filePath);
        res.status(200).json({ ipfsHash });
      } catch (error) {
        res.status(500).json({ error: 'Error uploading file to IPFS' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}