
<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";
import router from '../router';

const registrationNumber = ref("");
const email = ref("");
const password = ref("");
const names = ref("");

const goBack = () => {
  router.back()
}
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
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center" 
       style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <button @click="goBack" class=" hover:cursor-pointer ">
        <ArrowLeftIcon class="w-6 h-6 text-gray-700 hover:text-blue-700 " />
      </button>
      <h2 class="text-2xl font-semibold text-center mb-6">Student register </h2>
      <form @submit.prevent="studentRegister" class="space-y-4">
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
    </div>
  </div>
</template>
