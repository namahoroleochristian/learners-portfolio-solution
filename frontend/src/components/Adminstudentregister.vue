
<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";

const registrationNumber = ref("");
const email = ref("");
const password = ref("");
const names = ref("");


const studentRegister =async () => {
  try {
    const response = await fetch("http://localhost:8000/api/Users/studentRegistration", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: names.value,
      email: email.value,
      role: "student",
      password: password.value,
      registrationNumber: registrationNumber.value,

    }),
    credentials: "include"
  })
  const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "registration failed");
}

console.log("registration successful:", data);
// router.push("");
  } catch (error) {
    // errorMessage.value = error.message; 
    console.log(error.message);
    
  }
  
 
};
</script>

<template>
  
    
  <form @submit.prevent="studentRegister" class="space-y-4 p-6 min-w-full">
    <RouterLink to="/admindashboard" class=""><ArrowLeftIcon class="w-6 h-6 text-gray-700" /></RouterLink>
    <h2 class="text-2xl font-semibold text-center mb-6">Student register </h2>
        <div>
          <label class="block text-sm font-medium text-gray-700 " >Names</label>
          <input 
            type="text" 
            v-model="names" 
            placeholder="Enter Student names" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div> 
        <div>
          <label class="block text-sm font-medium text-gray-700 " >Registration Number</label>
          <input 
            type="number" 
            v-model="registrationNumber" 
            placeholder="Enter Student Registration Number" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div> 
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >  Email</label>
          <input 
            type="email" 
            v-model="email" 
            placeholder="Enter Student email" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >Password</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter Student password  " 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
        <button 
          type="submit" 
          class="w-full bg-blue-500 hover:cursor-pointer text-white text-xl p-3 rounded hover:bg-blue-900 transition">
        Register Student
        </button>
      </form>
    

</template>
