<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-64 bg-black text-white p-4">
      <h1 class="text-xl font-bold mb-6 bg-black-400">Admin Dashboard</h1>
      <nav>
        <ul>
          <li class="mb-4">
            <a href="#" @click="setActive('dashboard')" class="block p-2 rounded hover:bg-blue-700">Dashboard</a>
          </li>
          <li class="mb-4">
            <a href="#" @click="setActive('manageUsers')" class="block p-2 rounded hover:bg-blue-700">Manage Users</a>
          </li>
          <li class="mb-4">
            <a href="#" @click="setActive('upload-portfolio')" class="block p-2 rounded hover:bg-blue-700">Upload Portfolio</a>
          </li>
          <li class="mb-4">
            <a href="#" class="block p-2 rounded hover:bg-blue-700">View Portfolios</a>
          </li>
          <li class="mb-4">
            <a href="#" @click="setActive('comments')" class="block p-2 rounded hover:bg-blue-700">Comments</a>
          </li>
          <li class="mb-4">
            <a href="#" @click="logout" class="block mt-60 rounded hover:bg-blue-700">Logout</a>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="flex-1 flex flex-col" style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h2 class="text-lg font-semibold">{{ activePage === 'dashboard' ? 'Dashboard' : 'Manage Users' }}</h2>
        <div class="flex items-center space-x-4">
          <input type="text" placeholder="Search..." class="border p-2 rounded" />
          <button @click="setActive('settings')" class="bg-blue-500 text-white p-2 rounded">Settings</button>
        </div>
      </header>
      <main v-if="activePage === 'dashboard'" class="p-3 grid grid-cols-3 gap-4">
        <div class="bg-blue-300 text-white p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold text-black ">Total Users</h3>
          <p class="text-2xl font-bold">12,459</p>
        </div>
        <div class="bg-yellow-300 p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold text--600">Portfolios Uploaded</h3>
          <p class="text-2xl font-bold text-white ">320</p>
        </div>
        <div class="bg-indigo-400 text-white p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold">Comments</h3>
          <p class="text-2xl font-bold">890</p>
        </div>
        
        <div class="bg-blue-300 p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold ">Total students</h3>
          <p class="text-2xl font-bold text-white">9,245</p>
        </div>
        <div class="bg-yellow-300  p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold text-black">Total parents</h3>
          <p class="text-2xl font-bold text-white">820</p>
        </div>
        <div class="bg-indigo-400 p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold">Total Teacher</h3>
          <p class="text-2xl font-bold">90</p>
        </div>

        <div class="bg-blue-300 text-white p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold text-black font-bold">Students comments</h3>
          <p class="text-2xl font-bold">24</p>
        </div>
        <div class="bg-yellow-300 p-9 shadow rounded-lg hover:scale-105 hover:shadow-2xl shadow-gray-500">
          <h3 class="text-lg font-semibold text-black">Parents comments</h3>
          <p class="text-2xl font-bold text-white">30</p>
        </div>
        <div class="bg-indigo-400 text-white p-9 shadow rounded-lg hover:scale-105 hover:shadow-l ">
          <h3 class="text-lg font-semibold">Teacher comments</h3>
          <p class="text-2xl font-bold">20</p>
        </div>
      </main>

      <!-- mange users -->
      <main v-if="activePage === 'manageUsers'" class="p-20 grid grid-cols-3 gap-4">
        <div class="bg-gray-400 text-white p-8 shadow rounded-lg text-center cursor-pointer hover:bg-black">
          <h3  @click="setActive('manageStudents')" class="text-lg font-semibold">Manage Students</h3>
        </div>
        <div class="bg-white p-8 shadow rounded-lg text-center cursor-pointer hover:bg-gray-200">
          <h3 class="text-lg font-semibold">Manage Parents</h3>
        </div>
        <div class="bg-black text-white p-8 shadow rounded-lg text-center cursor-pointer hover:bg-gray-200">
          <h3 class="text-lg font-semibold">Manage Teacher</h3>
        </div>
      </main>

      <!-- Manage Students -->
      <main v-if="activePage === 'manageStudents'" class="p-6">
        <h3 class="text-lg font-semibold mb-4 text-center">Manage Students</h3>
        <form class="bg-white p-4 shadow rounded-md mb-4">
          <input v-model="studentName" type="text" placeholder="Student Name" class="border p-2 rounded w-full mb-2">
          <input v-model="studentClass" type="text" placeholder="Class" class="border p-2 rounded w-full mb-2">
          <input v-model="studentClass" type="text" placeholder="Email" class="border p-2 rounded w-full mb-2">
          <input v-model="studentClass" type="text" placeholder="father name" class="border p-2 rounded w-full mb-2">
          <input v-model="studentClass" type="text" placeholder="mother name" class="border p-2 rounded w-full mb-2">
          <input v-model="studentClass" type="text" placeholder="parents phone number" class="border p-2 rounded w-full mb-2">
          <button @click="addStudent" class="bg-blue-500 text-white p-2 rounded justify-center items-center align-center text-center">Add Student</button>
        </form>
        <ul class="bg-white p-4 shadow rounded-md">
          <li v-for="(student, index) in students" :key="index" class="border-b p-2 flex justify-between">
            {{ student.name }} - {{ student.class }}
            <button @click="deleteStudent(index)" class="text-red-500">Delete</button>
          </li>
        </ul>
      </main>

      <!-- comments -->
      <main v-if="activePage === 'comments'" class="p-20 grid grid-cols-3 gap-4">
        <div class="bg-black text-white p-8 shadow rounded-lg text-center cursor-pointer hover:bg-gray-200">
          <h3 class="text-lg font-semibold"> Students comments</h3>
        </div>
        <div class="bg-white p-8 shadow rounded-lg text-center cursor-pointer hover:bg-gray-200">
          <h3 class="text-lg font-semibold">Parents comments</h3>
        </div>
        <div class="bg-black text-white p-8 shadow rounded-lg text-center cursor-pointer hover:bg-gray-200">
          <h3 class="text-lg font-semibold">Teachers comment</h3>
        </div>
      </main>

      <div v-if="currentSection === 'upload-portfolio'">
        <UploadPortfolio />
      </div>

      <h1 class="text-center pt-20">Activation code: <span class="text-red-400">QWERTY</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      activePage: "dashboard",
      studentName: "",
      studentClass: "",
      students: [],
    };
  },
  methods: {
    setActive(page) {
      this.activePage = page;
    },
    async logout() {
      try {
        // Call the logout endpoint
        const response = await this.$axios.post('/logout');

        if (response.status === 200) {
          // Redirect to the home page
          this.$router.push({ name: 'dashboard' });
        }
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },
    addStudent() {
      if (this.studentName && this.studentClass) {
        this.students.push({ name: this.studentName, class: this.studentClass });
        this.studentName = "";
        this.studentClass = "";
      }
    },
    deleteStudent(index) {
      this.students.splice(index, 1);
    },
  },
};
</script>