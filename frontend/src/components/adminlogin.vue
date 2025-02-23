<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { ref } from "vue";
import router from '../router';

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const defaultAdmin = {
  email: "admin@gmail.com",
  password: "admin123"
};

const goBack = () => {
  router.back()
}

const login = () => {
  if (email.value === defaultAdmin.email && password.value === defaultAdmin.password) {
    router.push({ name: 'admindashboard' });
  } else {
    errorMessage.value = "Invalid email or password. Please try again.";
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center" 
       style="background-image: url('/bg.png');">
    <div class="bg-white/40 backdrop-blur-md hover:backdrop-blur-xl duration-300 cursor-pointer p-8 rounded-lg shadow-lg w-96">
      <button @click="goBack" class=" hover:cursor-pointer ">
        <ArrowLeftIcon class="w-6 h-6 text-gray-700 hover:text-blue-700 " />
      </button>
      <h2 class="text-2xl font-semibold text-center mb-6">Admin Login</h2>
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
        <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Log in
        </button>
      </form>
    </div>
  </div>
</template>
