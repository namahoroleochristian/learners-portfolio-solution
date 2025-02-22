<template>
  <div>
    <div class="bg-white/60 backdrop-blur-2xl  shadow-lg rounded-lg p-6 w-4/4  px-12">
      <ul class="space-y-4">
        <li>
      <h2 class="text-2xl font-semibold text-blue-800 text-center border-b border-gray-300 py-4">Portfolios</h2>

        </li>
        <li v-for="portfolio in portfolios" :key="portfolio.id"
          class="border-b border-gray-300 pb-4 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div class="flex-1">
            <p class="text-lg font-medium text-gray-800 break-all">
              {{ portfolio.name }}
            </p>
          </div>
          <div class="flex items-center gap-4">
            <button class="text-amber-500 hover:text-amber-600 p-2 rounded transition duration-300"
              title="Edit Portfolio">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            <button class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300"
              title="Delete Portfolio">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
            <a :href="portfolio.url" target="_blank"
              class="text-gray-600 hover:text-cyan-800 hover:bg-green-300 p-2 rounded transition duration-300"
              title="View Portfolio">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//   export default {
//     data() {
//       return {
//         portfolioFiles: [], // List of files
//       };
//     },
//     mounted() {
//       this.fetchPortfolio();
//     },
//     methods: {
//   async fetchPortfolio() {
//     try {
//       const response = await fetch("http://localhost:8000/list");
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);  // Inspect the response structure

//         // Assuming file.id contains the Google Drive file ID
//         this.portfolioFiles = data.map(file => {
//           return {
//             ...file,
//             url: file.id 
//               ? `https://drive.google.com/file/d/${file.id}/view?usp=sharing`
//               : `http://localhost:8000${file.url}`  // For local files if needed
//           };
//         });
//       } else {
//         alert("Failed to load portfolio.");
//       }
//     } catch (error) {
//       console.error("Error fetching portfolio:", error);
//     }
//   },
// },


//   };
export default {
  data() {
    return {
      portfolios: [], // Array to hold portfolio data
      uploadStatus: "",
    };
  },
  mounted() {
    this.fetchPortfolio();
  },
  methods: {
    logout() {
      alert("Logging out...");
    },
    async fetchPortfolio() {
      try {
        const response = await fetch("http://localhost:8000/list");
        if (response.ok) {
          const data = await response.json();
          // Map portfolio file info to include proper URLs
          this.portfolios = data.map((file) => ({
            ...file,
            url: file.id
              ? `https://drive.google.com/file/d/${file.id}/view?usp=sharing`
              : `http://localhost:8000${file.url}`,
          }));
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