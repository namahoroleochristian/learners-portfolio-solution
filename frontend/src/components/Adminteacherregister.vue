<script setup>
import { ref } from "vue";
import axios from "axios";

// Define form data as refs
const name = ref("");
const email = ref("");
const password = ref("");

// Define the activateAccount function to handle form submission and API call
const activateAccount = async () => {
  try {
    // Make the POST request to the server to register the teacher
    const response = await axios.post("http://localhost:8000/api/Users/teacherregister", {
      name: name.value,  // Corrected from fullName to name
      email: email.value,
      password: password.value,
    });
    
    // Log and handle the success response
    console.log("Teacher account activated:", response.data);
    // Optionally handle success (e.g., show a success message, navigate to another page, etc.)
  } catch (error) {
    // Handle any errors from the API
    console.error("Error activating account:", error);
    // Optionally handle error (e.g., show an error message)
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center">
    <div class="bg-white p-8 rounded-lg">
      <!-- Optional back link or icon -->
      <!-- <RouterLink to="/admindashboard" class=""><ArrowLeftIcon class="w-6 h-6 text-gray-700" /></RouterLink> -->
      <h2 class="text-2xl font-semibold text-center mb-6">Add Teacher</h2>
      <form @submit.prevent="activateAccount" class="space-y-4">
        <h3 class="text-center">Activate Teacher Account</h3>
        
        <!-- Full Name Input -->
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold">Full Name</label>
          <input 
            type="text" 
            v-model="name" 
            placeholder="Enter teacher name" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          />
        </div>
      
        <!-- Email Input -->
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold">Enter Email</label>
          <input 
            type="email" 
            v-model="email" 
            placeholder="Enter teacher email" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          />
        </div>
           
        <!-- Password Input -->
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold">Enter Password</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter teacher password" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Activate
        </button>
      </form>
    </div>
  </div>
</template>
