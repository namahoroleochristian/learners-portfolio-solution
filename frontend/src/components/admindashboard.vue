<template>
  <div class="flex min-h-screen sticky z-0 top-0">
    <!-- Sidebar (unchanged) -->
    <aside class="w-64 bg-blue-600/80 backdrop-blur-xs text-white p-6 flex flex-col sticky">
      <h1 class="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <nav class="flex-1">
        <ul>
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
    <div class="flex-1 flex flex-col bg-no-repeat bg-cover" style="background-image: url('/bg.png');">
      <!-- Header (unchanged) -->
      <header class="bg-white/80 backdrop-blur-lg shadow p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-10">
        <h2 class="text-xl font-semibold">{{ headerTitle }}</h2>
        <div class="flex items-center space-x-4 mt-2 sm:mt-0">
          <button @click="setActive('logout')" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
            Logout
          </button>
        </div>
      </header>

      <!-- Manage Users Page -->
      <main v-if="activePage === 'manageUsers'" class="p-8">
        <nav class="bg-white/60 backdrop-blur-lg rounded-md p-4 mb-6">
          <ul class="flex items-center justify-around text-xl font-semibold">
            <li>
              <button @click="setManageUserTab('students')" :class="{'bg-green-200 rounded p-2': manageUserTab === 'students'}" class="hover:bg-green-200 transition duration-300 p-2 rounded">
                Students
                <span class="inline-flex items-center pl-2">
                  <!-- SVG Icon for Students -->
                </span>
              </button>
            </li>
            <li>
              <button @click="setManageUserTab('teachers')" :class="{'bg-green-200 rounded p-2': manageUserTab === 'teachers'}" class="hover:bg-green-200 transition duration-300 p-2 rounded">
                Teachers
                <span class="inline-flex items-center pl-2">
                  <!-- SVG Icon for Teachers -->
                </span>
              </button>
            </li>
            <li>
              <button @click="setManageUserTab('parents')" :class="{'bg-green-200 rounded p-2': manageUserTab === 'parents'}" class="hover:bg-green-200 transition duration-300 p-2 rounded">
                Parents
                <span class="inline-flex items-center pl-2">
                  <!-- SVG Icon for Parents -->
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <!-- Manage Users Sub-section: Students -->
        <div v-if="manageUserTab === 'students'" class="p-4 bg-white/60 backdrop-blur-lg rounded-lg">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-semibold">Students List</h3>
            <button @click="openAddStudentForm" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
              Add New Student
            </button>
          </div>

          <!-- Conditionally Render UserRegister Component -->
          <div v-if="showAddStudentForm" class="mb-6 max-w-4/6 flex items-center justify-center mx-36 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md">
            <Adminstudentregister />
          </div>

          <div v-if="loadingStudents" class="text-center p-8 bg-blue-400/40 backdrop-blur-md text-blue-900 text-2xl font-semibold hover:cursor-progress">Loading students...</div>

          <ul v-else class="shadow-md rounded-md bg-white/5 backdrop-blur-xs overflow-x-hidden border-b border-gray-300 pt-2 flex flex-col sm:flex-col sm:items-center justify-between gap-2 p-6">
            <li v-for="(student, index) in students" :key="student._id || index" class="border-b py-2 flex justify-between items-center w-full p-4">
              <div>
                <p class="text-lg font-medium text-gray-800 break-all">{{ student.name }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <button @click="updateStudent(student)" class="text-amber-500 hover:text-amber-600 p-2 rounded transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
                </button>
                <button @click="deleteStudent(student._id)" class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>

        <!-- Manage Users Sub-section: Teachers -->
        <div v-else-if="manageUserTab === 'teachers'" class="p-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-semibold">Teachers List</h3>
            <button @click="openAddTeacherForm" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
              Add New Teacher
            </button>
          </div>

          <div v-if="loadingTeachers" class="text-center p-8 bg-blue-400/40 backdrop-blur-md text-blue-900 text-2xl font-semibold hover:cursor-progress">Loading teachers...</div>

          <ul v-else class="shadow-md rounded-md bg-white/60 backdrop-blur-2xl overflow-x-hidden border-b border-gray-300 pt-2 flex flex-col sm:flex-col sm:items-center justify-between gap-2 p-6">
            <li v-for="(teacher, index) in teachers" :key="teacher._id || index" class="border-b py-2 flex justify-between items-center w-full p-4">
              <div>
                <p class="text-lg font-medium text-gray-800 break-all">{{ teacher.name }}</p>
                <p class="text-sm text-gray-500">Subject: {{ teacher.subject }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <button @click="updateTeacher(teacher)" class="text-amber-500 hover:text-amber-600 p-2 rounded transition duration-300">
                  <!-- Edit Icon -->
                </button>
                <button @click="deleteTeacher(teacher._id)" class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300">
                  <!-- Delete Icon -->
                </button>
              </div>
            </li>
          </ul>
        </div>

        <!-- Manage Users Sub-section: Parents -->
        <div v-else-if="manageUserTab === 'parents'" class="p-4 bg-white/60 rounded-2xl backdrop-blur-md">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-semibold">Parents List</h3>
           
            <button @click="openAddParentForm"  class="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
           Add New Parent
            </button>
          </div>
          <!-- Conditionally Render UserRegister Component -->
          <div v-if="showAddParentForm" class="mb-6 max-w-4/6 flex items-center justify-center mx-36 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md">
            <Adminparentregister />
          </div>

          <div v-if="loadingParents" class="text-center p-8 bg-blue-400/40 backdrop-blur-md text-blue-900 text-2xl font-semibold hover:cursor-progress">Loading parents...</div>

          <ul v-else class="shadow-md rounded-md bg-white/60 backdrop-blur-2xl overflow-x-hidden border-b border-gray-300 pt-2 flex flex-col sm:flex-col sm:items-center justify-between gap-2 p-6">
            <li v-for="(parent, index) in parents" :key="parent._id || index" class="border-b py-2 flex justify-between items-center w-full p-4">
              <div>
                <p class="text-lg font-medium text-gray-800 break-all">{{ parent.name }}</p>
                <p class="text-sm text-gray-500">Phone: {{ parent.phone }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <button @click="updateParent(parent)" class="text-amber-500 hover:text-amber-600 p-2 rounded transition duration-300">
                  <!-- Edit Icon -->
                </button>
                <button @click="deleteParent(parent._id)" class="text-red-500 hover:text-red-600 p-2 rounded transition duration-300">
                  <!-- Delete Icon -->
                </button>
              </div>
            </li>
          </ul>
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AdminportfolioUpload from "./adminportfolioUpload.vue";
import PortfolioView from "./adminportfolioView.vue";
import Adminstudentregister from "./Adminstudentregister.vue";
import Adminparentregister from "./Adminparentregister.vue";
import router from "../router";

export default {
  name: "AdminDashboard",
  components: { AdminportfolioUpload, PortfolioView, Adminstudentregister,Adminparentregister},
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
      showAddStudentForm: false, // Toggle for adding student form
      showAddTeacherForm: false, // Toggle for adding teacher form
      showAddParentForm: false, // Toggle for adding parent form
    };
  },
  computed: {
    headerTitle() {
      switch (this.activePage) {
        case "dashboard": return "Dashboard";
        case "manageUsers": return "Manage Users";
        case "upload-portfolio": return "Upload Portfolio";
        case "viewPortfolios": return "View Portfolios";
        default: return "";
      }
    },
  },
  methods: {
    setActive(page) {
      this.activePage = page;
    },
    setManageUserTab(tab) {
      this.manageUserTab = tab;
      if (tab === "students") {
        this.fetchStudents();
      } else if (tab === "teachers") {
        this.fetchTeachers();
      } else if (tab === "parents") {
        this.fetchParents();
      }
    },
    fetchStudents() {
      this.loadingStudents = true;
      axios
        .get("http://localhost:8000/api/Users/GetStudents")
        .then((response) => {
          this.students = response.data.students;
        })
        .catch((error) => console.error("Error fetching students:", error))
        .finally(() => (this.loadingStudents = false));
    },
    fetchTeachers() {
      this.loadingTeachers = true;
      setTimeout(() => {
        this.loadingTeachers = false;
      }, 1000);
    },
    fetchParents() {
      this.loadingParents = true;
      setTimeout(() => {
        this.loadingParents = false;
      }, 1000);
    },
    openAddStudentForm() {
      this.showAddStudentForm = true;
    },
    openAddTeacherForm() {
      this.showAddTeacherForm = true;
    },
    openAddParentForm() {
      this.showAddParentForm = true;
    },
    // Update methods (similar for each section)
    updateStudent(student) {},
    updateTeacher(teacher) {},
    updateParent(parent) {},
    // Delete methods (similar for each section)
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
    deleteTeacher(id) {},
    deleteParent(id) {},
    async logout() {
  try {
    await axios.post("http://localhost:8000/api/Users/logout", {}, { withCredentials: true });

    alert("Logout successful!");
    
    // Clear local storage
    localStorage.removeItem("adminToken");

    // Redirect to admin login page
    this.$router.push({ name: "AdminLogin" });

  } catch (error) {
    alert("Logout failed: " + (error.response?.data?.message || error.message));
  }
},
  },
};
</script>
<style>
</style>