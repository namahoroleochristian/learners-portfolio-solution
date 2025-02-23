
<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";

const registrationNumber = ref("");
const email = ref("");
const activationCode = ref("");

const activateAccount = () => {
  console.log("Activating account with:", {
    registrationNumber: registrationNumber.value,
    email: email.value,
    activationCode: activationCode.value,
  });
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center" 
      >
    <div class="bg-white p-8 rounded-lg ">
      <!-- <RouterLink to="/admindashboard" class=""><ArrowLeftIcon class="w-6 h-6 text-gray-700" /></RouterLink> -->
      <h2 class="text-2xl font-semibold text-center mb-6">Add Teacher</h2>
      <form @submit.prevent="activateAccount" class="space-y-4">
        <h3 class="text-center">Activate Teacher account</h3>
        
        
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >full name</label>
          <input 
            type="text" 
            v-model="text" 
            placeholder="Enter teacher name" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
      
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >Enter email</label>
          <input 
            type="email" 
            v-model="email" 
            placeholder="Enter teacher email" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
           
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >Enter password</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter teacher password" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Activate
        </button>
      </form>
    </div>
  </div>
</template>
