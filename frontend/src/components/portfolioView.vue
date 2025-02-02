<template>
    <div >
      <h2 class="text-center mb-6 p-5 font-bold  text-5xl font-mono">Your Portfolio</h2>
      <ul class="flex flex-col items-center  m-36 mt-0 rounded-4xl shadow-2xl border border-gray-200 p-3  ">
        <li v-for="(file, index) in portfolioFiles" :key="index" class="flex justify-between rounded-xl p-3 border border-gray-400   mb-3 text-xl font-mono shadow-xl w-3/6" >
         <span class="text p-2"> {{ file.name }}</span><a :href="file.url" target="_blank" class="p-3  ml-12 bg-teal-900 text-white  rounded-xl px-10 hover:bg-cyan-800">View</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        portfolioFiles: [], // List of files
      };
    },
    mounted() {
      this.fetchPortfolio();
    },
    methods: {
  async fetchPortfolio() {
    try {
      const response = await fetch("http://localhost:8000/list");
      if (response.ok) {
        const data = await response.json();
        console.log(data);  // Inspect the response structure

        // Assuming file.id contains the Google Drive file ID
        this.portfolioFiles = data.map(file => {
          return {
            ...file,
            url: file.id 
              ? `https://drive.google.com/file/d/${file.id}/view?usp=sharing`
              : `http://localhost:8000${file.url}`  // For local files if needed
          };
        });
      } else {
        alert("Failed to load portfolio.");
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  },
},


  };
  </script>
  
  <style scoped>
  /* Basic styling */
  </style>
  