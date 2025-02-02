import { Router } from 'express';
import multer from 'multer';
import { uploadFile, listFiles } from '../googleDrive';

const router = Router();
const upload = multer({ dest: 'uploads/' }); // Temporary storage before uploading to Google Drive

// Route for uploading a portfolio file
router.post('/portfolio/upload', upload.single('file'), async (req, res) => {
  try {
    const fileData = await uploadFile(req.file.path, req.body.portfolioName);
    res.json({ message: 'File uploaded successfully!', file: fileData });
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload file', error });
  }
});

// Route for listing uploaded files
router.get('/portfolio/list', async (req, res) => {
  try {
    const files = await listFiles();
    res.json({ files });
  } catch (error) {
    res.status(500).json({ message: 'Failed to list files', error });
  }
});

export default router;
