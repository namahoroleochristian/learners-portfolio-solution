import { Router } from 'express';
import multer from 'multer';
import {  listFiles } from '../googleDrive.js';
import { uploadPortfolio } from '../controllers/googleDriveController.js';

const router = Router();
const upload = multer({ dest: 'uploads/' }); // Temporary storage before uploading to Google Drive

// Route for uploading a portfolio file
router.post('/upload', upload.single('file'), uploadPortfolio);

// Route for listing uploaded files
router.get('/list', async (req, res) => {
  try {
    const files = await listFiles();
    res.json({ files });
  } catch (error) {
    res.status(500).json({ message: 'Failed to list files', error });
  }
});

export default router;
