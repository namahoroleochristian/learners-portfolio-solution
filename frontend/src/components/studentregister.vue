<template>
  <div
    class="min-h-screen flex flex-col bg-blue-50 bg-cover"
    style="background-image: url('/bg.png');"
  >
    <!-- Header -->
    <header class="bg-blue-600/80 backdrop-blur-xs text-white p-4 shadow-md flex justify-between items-center px-12 sticky top-0 z-10">
      <RouterLink to="/teacherdashboard">
        <h1 class="text-xl font-extrabold">Teacher Dashboard</h1>
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
          @click="toggleCommentForm"
          class="block px-4 py-2 rounded-2xl text-lg font-semibold bg-purple-500 text-white hover:bg-purple-400 transition duration-300"
        >
          Make Comment
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
    <main class="flex-grow p-6 flex justify-center">
      <div class="bg-white/60 backdrop-blur-2xl shadow-lg rounded-lg p-6 w-3/4 px-12">
        <h2 class="text-2xl font-semibold text-blue-800 text-center border-b border-gray-300 py-4">
          Portfolios
        </h2>
        <ul class="mt-4 w-full">
          <li
            v-for="portfolio in portfolios"
            :key="portfolio.id"
            class="border-b border-gray-300 py-4 flex justify-between items-center"
          >
            <span class="text-gray-700 font-semibold">{{ portfolio.name }}</span>
            <div>
              <a
                :href="portfolio.url"
                target="_blank"
                class="text-gray-600 hover:text-cyan-800 p-2 rounded transition duration-300"
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

    <!-- Comments Form (toggleable) -->
    <section v-if="showCommentForm" class="bg-white/60 backdrop-blur-xl shadow-lg rounded-lg p-6 mx-12 my-6">
      <h2 class="text-2xl font-semibold mb-4 text-blue-800">Add Your Comment</h2>
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
    </section>

    <!-- Footer -->
    <footer class="bg-gray-200/60 text-center p-4 mt-6">
      <p class="text-black">&copy; 2025 Student Portfolio System</p>
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
      // Comments form state & fields
      showCommentForm: false,
      commentName: "",
      commentEmail: "",
      commentText: "",
    };
  },
  methods: {
    logout() {
      alert("Logging out...");
      // Implement your logout logic here
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
    toggleCommentForm() {
      this.showCommentForm = !this.showCommentForm;
    },
    async submitComment() {
      try {
        const response = await axios.post("http://localhost:8000/api/comments", {
          name: this.commentName,
          email: this.commentEmail,
          text: this.commentText,
          userType: "teachers", // Only teachers add comments here
        });
        console.log("Comment submitted:", response.data);
        alert("Comment submitted successfully!");
        // Clear the form fields after submission
        this.commentName = "";
        this.commentEmail = "";
        this.commentText = "";
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
