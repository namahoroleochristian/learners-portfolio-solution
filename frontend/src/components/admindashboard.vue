<template>
  <div class="flex min-h-screen sticky z-0 top-0 ">
    <!-- Sidebar (unchanged) -->
    <aside class="w-64 bg-blue-600/80 backdrop-blur-xs text-white p-6 flex flex-col sticky">
      <h1 class="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <nav class="flex-1">
        <ul>
          <!-- <li class="mb-4">
            <button @click="setActive('dashboard')" class="w-full text-left p-2 rounded hover:bg-blue-700 transition">
              Dashboard
            </button>
          </li> -->
          <li class="mb-4">
            <button @click="setActive('manageUsers')" class="w-full text-left p-2 rounded hover:bg-blue-700 transition">
              Manage Users
            </button>
          </li>
          <li class="mb-4">
            <button @click="setActive('upload-portfolio')" class="w-full text-left p-2 rounded hover:bg-blue-700 transition">
              Upload Portfolio
            </button>
          </li>
          <li class="mb-4">
            <button @click="setActive('viewPortfolios')" class="w-full text-left p-2 rounded hover:bg-blue-700 transition">
              View Portfolios
            </button>
          </li>
          <li class="mb-4">
            <button @click="setActive('comments')" class="w-full text-left p-2 rounded hover:bg-blue-700 transition">
              Comments
            </button>
          </li>
        </ul>
      </nav>
      <div class="mt-auto">
        <button @click="logout" class="w-full p-2 rounded hover:bg-blue-700 transition">Logout</button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div
      class="flex-1 flex flex-col"
      style="background-image: url('../assets/bg.png');"
    >
      <!-- Header (unchanged) -->
      <header class="bg-white/80 backdrop-blur-lg shadow p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-10">
        <h2 class="text-xl font-semibold">{{ headerTitle }}</h2>
        <div class="flex items-center space-x-4 mt-2 sm:mt-0">
          <!-- <input
            type="text"
            placeholder="Search..."
            class="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          /> -->
          <button @click="setActive('logout')" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
            Logout
          </button>
        </div>
      </header>

      <!-- Dashboard Page (unchanged) -->
      <main v-if="activePage === 'dashboard'" class="p-6">
        <h1>Dashboard Content</h1>
      </main>

      <!-- Manage Users Page -->
      <main v-if="activePage === 'manageUsers'" class="p-8">
        <!-- Sub-navigation for Manage Users (unchanged) -->
        <nav class="bg-white/80 backdrop-blur-lg rounded-xl p-4 mb-6">
          <ul class="flex items-center justify-around text-xl font-semibold">
            <li>
              <button
                @click="setManageUserTab('students')"
                :class="{'bg-green-200 rounded p-2': manageUserTab === 'students'}"
                class="hover:bg-green-200 transition duration-300 p-2 rounded"
              >
                Students
                <span class="inline-flex items-center pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button
                @click="setManageUserTab('teachers')"
                :class="{'bg-green-200 rounded p-2': manageUserTab === 'teachers'}"
                class="hover:bg-green-200 transition duration-300 p-2 rounded"
              >
                Teachers
                <span class="inline-flex items-center pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button
                @click="setManageUserTab('parents')"
                :class="{'bg-green-200 rounded p-2': manageUserTab === 'parents'}"
                class="hover:bg-green-200 transition duration-300 p-2 rounded"
              >
                Parents
                <span class="inline-flex items-center pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <!-- Manage Users Sub-section: Students -->
        <div v-if="manageUserTab === 'students'" class="p-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-semibold">Students List</h3>
            <button @click="openAddStudentForm" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
              Add New Student
            </button>
          </div>

          <!-- Conditionally Render UserRegister Component -->
          <div v-if="showAddStudentForm" class="mb-6 max-w-4/6 flex items-center justify-center mx-36    bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md">
            <Adminstudentregister  />
          </div>

          <div v-if="loadingStudents" class="text-center p-4">Loading students...</div>
          <ul v-else class="shadow-md rounded-md bg-white/60 backdrop-blur-2xl overflow-x-hidden border-b border-gray-300 pt-2 flex flex-col sm:flex-col sm:items-center justify-between gap-2 p-6">
            <li v-for="(student, index) in students" :key="student._id || index" class="border-b py-2 flex justify-between items-center w-full p-4">
              <div>
                <p class="text-lg font-medium text-gray-800 break-all">{{ student.name }}</p>
                <p class="text-sm text-gray-500">Class: {{ student.class }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <!-- <button @click="viewStudent(student)" class="text-gray-600 hover:text-cyan-800 hover:bg-green-300 p-2 rounded transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button> -->
                <button @click="updateStudent(student)" class="text-amber-500 hover:text-amber-600 p-2 rounded transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
                <button @click="deleteStudent(student._id)" class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>

        <!-- Teachers and Parents sections remain unchanged -->
        <div v-else-if="manageUserTab === 'teachers'" class="p-4">
          <!-- Teachers content unchanged -->
        </div>
        <div v-else-if="manageUserTab === 'parents'" class="p-4">
          <!-- Parents content unchanged -->
        </div>
      </main>

      <!-- Other sections (Comments, Upload Portfolio, View Portfolios) remain unchanged -->
      <main v-if="activePage === 'comments'" class="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <p class="text-center w-full">Comments section coming soon...</p>
      </main>
      <section v-if="activePage === 'upload-portfolio'" class="p-8">
        <AdminportfolioUpload />
      </section>
      <section v-if="activePage === 'viewPortfolios'" class="flex items-center justify-center overflow-x-hidden m-5 w-auto">
        <PortfolioView />
      </section>
      <div class="text-center h-10">
        <h1 class="text-2xl">Activation code: <span class="text-red-400 font-bold">QWERTY</span></h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminportfolioUpload from "./adminportfolioUpload.vue";
import PortfolioView from "./adminportfolioView.vue";


import Adminstudentregister from "./Adminstudentregister.vue";


export default {
  name: "AdminDashboard",
  components: { AdminportfolioUpload, PortfolioView, Adminstudentregister }, // Register the component
  data() {
    return {
      activePage: "dashboard",
      manageUserTab: "students",
      students: [],
      teachers: [
        { _id: "t1", name: "Mr. Anderson", subject: "Mathematics" },
        { _id: "t2", name: "Ms. Davis", subject: "History" },
      ],
      parents: [
        { _id: "p1", name: "Mrs. Johnson", phone: "123-456-7890" },
        { _id: "p2", name: "Mr. Smith", phone: "987-654-3210" },
      ],
      loadingStudents: false,
      loadingTeachers: false,
      loadingParents: false,
      showAddStudentForm: false, // New state to toggle the form
    };
  },
  computed: {
    headerTitle() {
      // Unchanged
      switch (this.activePage) {
        case "dashboard": return "Dashboard";
        case "manageUsers": return "Manage Users";
        case "upload-portfolio": return "Upload Portfolio";
        case "viewPortfolios": return "View Portfolios";
        case "comments": return "Comments";
        case "settings": return "Settings";
        default: return "";
      }
    },
  },
  watch: {
    manageUserTab(newTab) {
      if (newTab === "students") {
        this.fetchStudents();
      }
    },
  },
  mounted() {
    if (this.activePage === "manageUsers" && this.manageUserTab === "students") {
      this.fetchStudents();
    }
  },
  methods: {
    setActive(page) {
      this.activePage = page;
      if (page !== "manageUsers") {
        this.manageUserTab = "students";
      } else {
        this.fetchStudents();
      }
    },
    async logout() {
      // Unchanged
    },
    // STUDENTS
    async fetchStudents() {
      // Unchanged
      this.loadingStudents = true;
      try {
        const { data } = await axios.get("http://localhost:8000/api/Users/GetStudents");
        if (data.success) {
          this.students = data.students;
        } else {
          console.error("Error fetching students:", data.message);
        }
      } catch (error) {
        console.error("Error fetching students:", error.message);
      } finally {
        this.loadingStudents = false;
      }
    },
    openAddStudentForm() {
      this.showAddStudentForm = true; // Show the form instead of redirecting
    },
    closeAddStudentForm() {
      this.showAddStudentForm = false; // Hide the form
    },
    handleStudentAdded(newStudent) {
      this.students.push(newStudent); // Add the new student to the list
      this.closeAddStudentForm(); // Close the form after adding
    },
    viewStudent(student) {
      // Unchanged
    },
    updateStudent(student) {
      // Unchanged
    },
    async deleteStudent(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
        try {
            const response = await axios.delete(`http://localhost:8000/api/Users/deletestudent/${id}`);
            if (response.data.success) {
                this.students = this.students.filter(student => student._id !== id);
                alert("Student deleted successfully!");
            } else {
                alert("Error deleting student: " + response.data.message);
            }
        } catch (error) {
            alert("Error deleting student: " + error.message);
        }
    }
},
    // TEACHERS and PARENTS methods remain unchanged
    openAddTeacherForm() { /* Unchanged */ },
    viewTeacher(teacher) { /* Unchanged */ },
    updateTeacher(teacher) { /* Unchanged */ },
    async deleteTeacher(id) { /* Unchanged */ },
    openAddParentForm() { /* Unchanged */ },
    viewParent(parent) { /* Unchanged */ },
    updateParent(parent) { /* Unchanged */ },
    async deleteParent(id) { /* Unchanged */ },
  },
};
</script>

<style scoped>
/* Unchanged */
</style>