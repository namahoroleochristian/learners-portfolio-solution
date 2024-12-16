// googleDrive.js
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Google OAuth setup
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// This function will upload the file to Google Drive
async function uploadFile(filePath, folderId, accessToken) {
  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  oauth2Client.setCredentials({ access_token: accessToken });

  try {
    const fileMetadata = {
      name: path.basename(filePath),
      parents: [folderId], // Upload to a specific folder (folderId is passed as a parameter)
    };

    const media = {
      mimeType: 'application/octet-stream',
      body: fs.createReadStream(filePath),
    };

    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });

    return file.data.id; // Return the file ID
  } catch (error) {
    throw new Error('Error uploading file: ' + error.message);
  }
}

module.exports = { uploadFile };
