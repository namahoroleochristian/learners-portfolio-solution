<template>
  <div class="min-h-screen flex flex-col bg-blue-50">
    <!-- Header -->
    <header class="bg-blue-900 text-white p-4 shadow-md flex justify-between items-center px-12">
      <h1 class="text-xl font-bold">Student Dashboard</h1>
      <button class="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-6 flex justify-center">
      <div class="bg-white shadow-lg rounded-lg p-6 w-3/4 px-12">
        <h2 class="text-2xl font-semibold text-blue-800 text-center border-b border-gray-300 py-4">My Portfolio</h2>
        <ul class="mt-4 w-full">
          <li v-for="portfolio in portfolios" :key="portfolio.id" class="border-b border-gray-300 py-4 flex justify-between items-center">
            <span class="text-gray-700">{{ portfolio.title }}</span>
            <div>
              <button @click="viewPortfolio(portfolio)" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">View</button>
              <button @click="downloadPortfolio(portfolio)" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Download</button>
            </div>
          </li>
        </ul>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white text-center p-4 mt-6">
      <p>&copy; 2025 Student Portfolio System</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        { id: 1, title: "Math Project", file: "1731174016324.pdf" },
        { id: 2, title: "Science Report", file: "science_report.pdf" }
      ]
    };
  },
  methods: {
    downloadPortfolio(portfolio) {
      // Simulating file download
      const link = document.createElement('a');
      link.href = `/files/${portfolio.file}`;
      link.download = portfolio.file;
      link.click();
    },
    viewPortfolio(portfolio) {
      // Open file in a new tab
      window.open(`/files/${portfolio.file}`, '_blank');
    }
  }
};
</script>
