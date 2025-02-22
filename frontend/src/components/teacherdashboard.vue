<template>
  <div
    class="min-h-screen flex flex-col bg-green-50 bg-no-repeat"
    style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');"
  >
    <!-- Header -->
    <header
      class="bg-blue-500/85 backdrop-blur-3xl text-white p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-10"
    >
      <RouterLink to="/teacherdashboard" class="mb-2 sm:mb-0">
        <h1 class="text-xl font-bold">Teacher Dashboard</h1>
      </RouterLink>
      <div class="flex flex-col sm:flex-row items-center gap-2">
        <RouterLink
          to="/studentregister" activePage
          class="block px-4 py-2 rounded-2xl text-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition duration-300"
        >
          Register a Student
        </RouterLink>
        <button
          class="flex items-center rounded p-2 text-red-400 hover:cursor-pointer hover:bg-red-200 transition duration-300"
          @click="logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0l3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 p-4 sm:p-6 lg:p-8">
      <div class="bg-white/60 backdrop-blur-xl shadow-lg rounded-lg p-6 space-y-6">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <h2 class="text-xl font-semibold mb-4 sm:mb-0">Manage Portfolios</h2>
          <RouterLink
            to="/upload"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-300"
          >
            Upload Portfolio
          </RouterLink>
        </div>
        <ul class="space-y-4">
          <li
            v-for="portfolio in portfolios"
            :key="portfolio.id"
            class="border-b border-gray-300 pb-4 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          >
            <div class="flex-1">
              <p class="text-lg font-medium text-gray-800 break-all">
                {{ portfolio.name }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <button
                class="text-amber-500 hover:text-amber-600 p-2 rounded transition duration-300"
                title="Edit Portfolio"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              <button
                class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300"
                title="Delete Portfolio"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
              <a
                :href="portfolio.url"
                target="_blank"
                class="text-gray-600 hover:text-cyan-800 hover:bg-green-300 p-2 rounded transition duration-300"
                title="View Portfolio"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200/80 text-center p-4 mt-6">
      &copy; 2025 Student Portfolio System
    </footer>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

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
