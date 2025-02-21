<template>
  <div class="min-h-screen flex flex-col bg-blue-50" style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <header class=" bg-blue-600/80 backdrop-blur-xs text-white p-4 shadow-md flex justify-between items-center px-12 sticky top-0 z-10">
      <h1 class="text-xl font-extrabold">Student Dashboard</h1>
      <button class="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-6 flex justify-center">
      <div class="bg-white/60 backdrop-blur-2xl  shadow-lg rounded-lg p-6 w-3/4 px-12">
        <h2 class="text-2xl font-semibold text-blue-800 text-center border-b border-gray-300 py-4">My Portfolio</h2>
        <ul class="mt-4 w-full">
          <li v-for="portfolio in portfolios" :key="portfolio.id" class="border-b border-gray-300 py-4 flex justify-between items-center">
            <span class="text-gray-700 font-semibold ">{{ portfolio.name }}</span>
            <div>
              <button @click="viewPortfolio(portfolio)" class=" text-gray-300 px-3 py-1 rounded hover:cursor-pointer duration-400 hover:bg-green-200 hover:text-green-950 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg></button>
              <!-- <button @click="downloadPortfolio(portfolio)" class=" text-amber-300 px-3 py-1 rounded duration-200 hover:bg-amber-200 hover:text-amber-900 hover:cursor-ponter "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg></button> -->
            </div>
          </li>
        </ul>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200/60 text-white text-center p-4 mt-6">
      <p class="text-black ">&copy; 2025 Student Portfolio System</p>
    </footer>
  </div>
</template>

<script>
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
