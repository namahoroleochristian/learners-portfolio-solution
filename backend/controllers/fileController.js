// backend/controllers/fileController.js
const multer = require('multer');
const path = require('path');

// Configure multer storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique file names
  }
});

const upload = multer({ storage });

// Controller for file upload
const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  console.log('Uploaded file:', req.file);
  res.send({
    message: 'File uploaded successfully!',
    file: req.file
  });
};

module.exports = { upload, uploadFile };
