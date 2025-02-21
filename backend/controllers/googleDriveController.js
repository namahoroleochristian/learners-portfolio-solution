import { uploadFile, listFiles } from '../googleDrive.js'
import path from 'path'
import multer from 'multer'
import dotenv from 'dotenv'
dotenv.config()




const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage }).single('file');

export const uploadPortfolio = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ message: 'File upload failed' });

    const filePath = req.file.path;
    

    try {
      const fileData = await uploadFile(filePath);
      res.status(200).json({ message: 'File uploaded', fileData });
    } catch (error) {
      res.status(500).json({ message: 'Google Drive upload failed', error });
    }
  });
};

export const getPortfolios = async (req, res) => {
  try {
    const files = await listFiles();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: 'Failed to list files', error });
  }
};
