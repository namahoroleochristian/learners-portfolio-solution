// ParentDashboard.vue
<template>
  <div class="min-h-screen flex flex-col bg-purple-50">
    <header class="bg-purple-900 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Parent Dashboard</h1>
      <button class="bg-red-500 px-4 py-2 rounded" @click="logout">Logout</button>
    </header>
    
    <main class="flex-1 p-6">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Student Portfolio</h2>
        <ul>
          <li v-for="portfolio in studentPortfolios" :key="portfolio.id" class="border-b py-2">{{ portfolio.title }}</li>
        </ul>
        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded">Download</button>
      </div>
    </main>
    
    <footer class="bg-gray-200 text-center p-4 mt-6">
      &copy; 2025 Student Portfolio System
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentPortfolios: [{ id: 1, title: "History Essay" }, { id: 2, title: "Art Portfolio" }]
    };
  },
  methods: {
    logout() {
      alert("Logging out...");
    }
  }
};
</script>