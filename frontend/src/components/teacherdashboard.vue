<template>
  <div class="min-h-screen flex flex-col bg-green-50" style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <header class="bg-blue-500/85 backdrop-blur-3xl  text-white p-4 flex justify-between items-center  sticky top-0 z-10">
      <ul>
        <li><h1 class="text-xl font-bold ">Teacher Dashboard</h1></li>
        
      </ul>
      
      <ul class="flex justify-between text-center">
        <li  class="px-2">
          <RouterLink to="/studentregister" ><p class=" text-center ">Student Registration</p> </RouterLink>
        </li>
        <li class="px-2 "><button class="bg-red-500 px-4 py-2 rounded" @click="logout">Logout</button></li>
      </ul>
      
    </header>
    
    <main class="flex-1 p-6">
      <div class="bg-white/60 backdrop-blur-xl shadow-lg rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Manage Portfolios</h2>
        <RouterLink to="/upload" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Upload Portfolio</RouterLink>
        <ul>
          <li v-for="portfolio in portfolios" :key="portfolio.id" class="border border-x-0 border-t-0 border-b-gray-300 pb-2 px-4 pt-8 flex  items-center justify-between">
            {{ portfolio.name }}
            <div class="flex items-center justify-center space-x-2">
              <button class=" text-amber-500 px-3 py-1 rounded "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
              <button class=" text-red-500 px-3 py-1 rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
              <a 
                :href="portfolio.url" 
                target="_blank" 
                class=" text-gray-600 px-3 py-1 rounded hover:text-cyan-800 hover:bg-green-300 transition-300"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

              </a>
            </div>
          </li>
        </ul>
      </div>
    </main>
    
    <footer class="bg-gray-200/20  text-center p-4 mt-6">
      &copy; 2025 Student Portfolio System
    </footer>
  </div>
</template>

<script>

import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      portfolios: [],  // Empty array to be populated by fetched portfolio data
      uploadStatus: '',
    };
  },
  mounted() {
    this.fetchPortfolio();  // Fetch portfolio data on component mount
  },
  methods: {
    logout() {
      alert("Logging out...");
    },

    // Fetch portfolio data from the API
    async fetchPortfolio() {
      try {
        const response = await fetch("http://localhost:8000/list");
        if (response.ok) {
          const data = await response.json();
          console.log(data);  

          // Assuming file.id contains the Google Drive file ID
          this.portfolios = data.map(file => {
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
