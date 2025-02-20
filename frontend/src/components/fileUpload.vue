<!-- <template>
  <head>
   
  </head>
<<<<<<< HEAD
  <div class="m-25   ">
    <form @submit.prevent="handleFileUpload" class="max-h-120 border border-gray-200 shadow-2xl rounded-4xl" >
=======
  <div class="m-25   "  style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <form @submit.prevent="handleFileUpload" class="min-h-120 border border-gray-200 shadow-2xl rounded-4xl" >
>>>>>>> 5d66a85 (refined frontend)
      <h1 class="text-4xl font-bold text-center font-mono p-8 ">Upload Your Portfolio</h1>
      <div class="flex justify-center mt-25">
      <input type="file" name="upload" id="upload" @change="handleFileChange" class="rounded-lg text-xl h-25 font-mono cursor-pointer p-4 " placeholder="Select a file " />
      <button type="submit" class="bg-teal-600 p-2 rounded-lg text-xl font-mono cursor-pointer text-white h-16 hover:bg-teal-500">click to upload</button>
    </div>
    <div v-if="uploadStatus" class="flex justify-center text-center text-xl h-16 bg-red-100 p-4 w-5/6 text-red-800 m-25 mt-10    ">
      <p class="align-center">** {{ uploadStatus }}</p>
    </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
      uploadStatus: '',
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },

    async handleFileUpload() {
      if (!this.selectedFile) {
        this.uploadStatus = 'Please select a file first.';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        this.uploadStatus = 'Uploading...';

        const response = await axios.post('http://localhost:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          this.uploadStatus = `File uploaded successfully! File ID: ${response.data.fileId}`;
        } else {
          this.uploadStatus = 'File upload failed!';
        }
      } catch (error) {
        console.log('Error uploading file:', error.response ? error.response.data : error.message);
        this.uploadStatus = 'An error occurred while uploading the file.';
      }
    },
  },
};
</script> -->
<template>
  <div class="m-25" style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <form @submit.prevent="handleFileUpload" class="min-h-120 border border-gray-200 shadow-2xl rounded-4xl">
      <h1 class="text-4xl font-bold text-center font-mono p-8">Upload Your Portfolio</h1>
      <div class="flex justify-center mt-25">
        <input type="file" name="upload" id="upload" @change="handleFileChange" class="rounded-lg text-xl h-25 font-mono cursor-pointer p-4" placeholder="Select a file" />
        <button type="submit" class="bg-teal-600 p-2 rounded-lg text-xl font-mono cursor-pointer text-white h-16 hover:bg-teal-500">Click to Upload</button>
      </div>
      <div v-if="uploadStatus" class="flex justify-center text-center text-xl h-16 bg-red-100 p-4 w-5/6 text-red-800 m-25 mt-10">
        <p class="align-center">** {{ uploadStatus }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
      uploadStatus: '',
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },

    async handleFileUpload() {
      if (!this.selectedFile) {
        this.uploadStatus = 'Please select a file first.';
        return;
      }

      const formData = new FormData();
      formData.append('file', this.selectedFile);

      try {
        this.uploadStatus = 'Uploading...';

        const response = await axios.post('http://localhost:8000/api/portfolio/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          this.uploadStatus = `File uploaded successfully! File ID: ${response.data.fileId}`;
        } else {
          this.uploadStatus = 'File upload failed!';
        }
      } catch (error) {
        console.log('Error uploading file:', error.response ? error.response.data : error.message);
        this.uploadStatus = 'An error occurred while uploading the file.';
      }
    },
  },
};
</script>

