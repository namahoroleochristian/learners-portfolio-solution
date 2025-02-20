import { google } from 'googleapis'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()


const DRIVE_FOLDER_ID = process.env.DRIVE_FOLDER_ID;

// Google OAuth setup
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Set the refresh token (this is the critical fix)
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// This function will upload the file to Google Drive
async function uploadFile(filePath, folderId, accessToken) {
  const drive = google.drive({ version: 'v3', auth: oauth2Client });
  
  // Optionally, if you have an access token, you can set it
  if (accessToken) {
    oauth2Client.setCredentials({ access_token: accessToken });
  }
  
  try {
    const fileMetadata = {
      name: path.basename(filePath),
      parents: [folderId],
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

    return file.data.id;
  } catch (error) {
    throw new Error('Error uploading file: ' + error.message);
  }
}

// Function to list files in the specified folder
async function listFiles() {
  try {
    const drive = google.drive({ version: 'v3', auth: oauth2Client });
    const response = await drive.files.list({
      q: `'${DRIVE_FOLDER_ID}' in parents`,
      fields: 'files(id, name)',
    });
    console.log('Files:', response.data.files);
    return response.data.files;
    
  } catch (error) {
    console.error('Error in listFiles:', error.message);
    throw error;
  }
}

export {uploadFile, listFiles} ;
