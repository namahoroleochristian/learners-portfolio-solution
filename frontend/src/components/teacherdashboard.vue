
// TeacherDashboard.vue
<template>
  <div class="min-h-screen flex flex-col bg-green-50">
    <header class="bg-green-900 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Teacher Dashboard</h1>
      <button class="bg-red-500 px-4 py-2 rounded" @click="logout">Logout</button>
    </header>
    
    <main class="flex-1 p-6">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Manage Portfolios</h2>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Upload Portfolio</button>
        <ul>
          <li v-for="portfolio in portfolios" :key="portfolio.id" class="border-b py-2 flex justify-between">
            {{ portfolio.title }}
            <div>
              <button class="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
              <button class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        </ul>
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
      portfolios: [{ id: 1, title: "Algebra Guide" }, { id: 2, title: "Physics Lab Report" }]
    };
  },
  methods: {
    logout() {
      alert("Logging out...");
    }
  }
};
</script>
