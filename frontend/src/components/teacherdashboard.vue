<template>
  <div
    class="min-h-screen flex flex-col bg-green-50 bg-no-repeat bg-cover"
    style="background-image: url('/bg.png');"
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
          to="/studentregister"
          class="block px-4 py-2 rounded-2xl text-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition duration-300"
        >
          Register a Student
        </RouterLink>
        <!-- New Comments Button -->
        <button
          @click="toggleCommentsForm"
          class="block px-4 py-2 rounded-2xl text-lg font-semibold bg-purple-500 text-white hover:bg-purple-400 transition duration-300"
        >
          Comments
        </button>
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
        <!-- Portfolios Section (unchanged) -->
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
                <!-- Edit Icon SVG -->
              </button>
              <button
                class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300"
                title="Delete Portfolio"
              >
                <!-- Delete Icon SVG -->
              </button>
              <a
                :href="portfolio.url"
                target="_blank"
                class="text-gray-600 hover:text-cyan-800 hover:bg-green-300 p-2 rounded transition duration-300"
                title="View Portfolio"
              >
                <!-- View Icon SVG -->
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- Comments Form (Toggleable) -->
      <div v-if="showCommentsForm" class="bg-white/60 backdrop-blur-xl shadow-lg rounded-lg p-6 mt-6">
        <h2 class="text-2xl font-semibold mb-4">Add Your Comment</h2>
        <form @submit.prevent="submitComment" class="space-y-4">
          <div>
            <label class="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              v-model="commentName"
              placeholder="Enter your name"
              class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label class="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              v-model="commentEmail"
              placeholder="Enter your email"
              class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label class="block text-lg font-medium text-gray-700">Comment</label>
            <textarea
              v-model="commentText"
              placeholder="Write your comment here..."
              class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-purple-500 text-white p-3 rounded hover:bg-purple-400 transition"
          >
            Submit Comment
          </button>
        </form>
      </div>

      <!-- Portfolios list, etc., can remain below -->
      <div class="mt-6">
        <ul class="space-y-4">
          <!-- Existing portfolio list here -->
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
import axios from "axios";

export default {
  name: "TeacherDashboard",
  components: { RouterLink },
  data() {
    return {
      portfolios: [],
      commentName: "",
      commentEmail: "",
      commentText: "",
      // Toggle the comments form visibility
      showCommentsForm: false,
    };
  },
  methods: {
    logout() {
      alert("Logging out...");
      // Your logout logic here
    },
    async fetchPortfolio() {
      try {
        const response = await fetch("http://localhost:8000/list");
        if (response.ok) {
          const data = await response.json();
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
    toggleCommentsForm() {
      this.showCommentsForm = !this.showCommentsForm;
    },
    async submitComment() {
      // For this example, the teacher will add a comment via the /api/comments endpoint.
      try {
        const response = await axios.post("http://localhost:8000/api/comments", {
          name: this.commentName,
          email: this.commentEmail,
          text: this.commentText,
          userType: "teachers", // since only teachers add comments in this scenario
        });
        console.log("Comment submitted:", response.data);
        // Optionally clear form fields after submission
        this.commentName = "";
        this.commentEmail = "";
        this.commentText = "";
        // Optionally show a success message
        alert("Comment submitted successfully!");
        // Optionally refresh a comments list if needed
      } catch (error) {
        console.error("Error submitting comment:", error);
        alert("Failed to submit comment.");
      }
    },
  },
  mounted() {
    this.fetchPortfolio();
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
