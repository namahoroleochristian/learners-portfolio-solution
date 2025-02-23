

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";
import router from '../router';

const email = ref("");
const password = ref("");

const goBack = () => {
  router.back()
}

const login = () => {
  console.log("Logging in with:", email.value, password.value);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center" 
       style="background-image: url('/bg.png');">
    <div class="bg-white/40 backdrop-blur-md hover:backdrop-blur-xl duration-300 cursor-pointer p-8 rounded-lg shadow-lg w-96">
      <button @click="goBack" class=" hover:cursor-pointer ">
        <ArrowLeftIcon class="w-6 h-6 text-gray-700 hover:text-blue-700 " />
      </button>
      <h2 class="text-2xl font-semibold text-center mb-6">Teachers Log in</h2>
      <form @submit.prevent="login" class="space-y-4">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email" 
          class="w-full p-3 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500" 
          required
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password" 
          class="w-full p-3 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500" 
          required
        />
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Log in
        </button>
        <div class="text-center">
          <a href="#" class="text-blue-600 text-sm hover:underline">Forgot your password?</a>
        </div>
        <div class="text-center">
        
        </div>
      </form>
    </div>
  </div>
</template>

