
<script setup>
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
       style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-semibold text-center mb-6">Parent Acount Activation </h2>
      <form @submit.prevent="activateAccount" class="space-y-4">
        <h3 class="text-center">Activate your account</h3>
        
        
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >Parents Phone number</label>
          <input 
            type="text" 
            v-model="text" 
            placeholder="Enter your phone number" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >Enter your student name</label>
          <input 
            type="text" 
            v-model="text" 
            placeholder="Enter your phone number" 
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
            
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 font-bold" >Enter your student email</label>
          <input 
            type="text" 
            v-model="text" 
            placeholder="Enter your phone number" 
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
