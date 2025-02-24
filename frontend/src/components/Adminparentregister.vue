<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const message = ref("");
const isLoading = ref(false);

const registerParent = async () => {
  isLoading.value = true;
  message.value = "";

  try {
    const response = await fetch("http://localhost:8000/api/Users/parentregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      message.value = "Parent registered successfully!";
    } else {
      message.value = data.message || "Registration failed!";
    }
  } catch (error) {
    message.value = "Something went wrong. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="registerParent" class="min-w-full ">
    <div class="">
      <h2 class="text-2xl font-semibold text-center mb-6">Parent Registration</h2>

      <div>
        <label class="block text-sm font-medium text-gray-700 font-bold">Parent's Email</label>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Enter parent email" 
          class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 font-bold">Parent's Name</label>
        <input 
          type="text" 
          v-model="name" 
          placeholder="Enter parent name" 
          class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 font-bold">Parent's Password</label>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter parent password" 
          class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          required
        />
      </div>

      <button 
        type="submit" 
        class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        :disabled="isLoading"
      >
        {{ isLoading ? "Registering..." : "Register" }}
      </button>

      <p v-if="message" class="text-center mt-3 font-semibold" :class="message.includes('successfully') ? 'text-green-600' : 'text-red-600'">
        {{ message }}
      </p>
    </div>
  </form>
</template>
