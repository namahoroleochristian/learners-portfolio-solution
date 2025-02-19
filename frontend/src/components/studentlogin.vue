<!-- frontend/src/components/Login.vue
<template>
  <div class="flex w-full h-screen flex-col justify-center items-center">
    <form @submit.prevent="login" class="flex lg:w-3/6 md:w-6/10 flex-col bg-slate-200 p-16 rounded-xl shadow-lg border border-gray-100 items-center">
      <h1 class="text-center mt-3 font-mono text-4xl font-bold mb-10 ">Login</h1>
      <input v-model="email" type="email" class="p-2 bg-slate-300 m-2 w-full rounded-lg  outline-none  font-mono text-xl focus:ring-2 ring-blue-300" placeholder="Email" required />
      <input v-model="password" type="password" class="p-2 bg-slate-300 m-2 w-full rounded-lg  outline-none font-mono  text-xl  focus:ring-2 ring-blue-300" placeholder="Password" required />
      <button type="submit" class="bg-slate-600 w-5/6  py-3  text-xl font-mono mt-10 rounded-xl text-white hover:  hover:bg-slate-700">Login</button>
          <p>Already do n't have an account ? please</p><RouterLink to="/register" class="text-blue-400">Register</RouterLink>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.$router.push('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  },
};
</script> -->




<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  console.log("Logging in with:", email.value, password.value);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center" 
       style="background-image: url('https://pfst.cf2.poecdn.net/base/image/0935f79852dea24c2fd6768a80c491e649f17294fd8005edbbef6672a8a536ee?w=1024&h=768&pmaid=289842107');">
    <div class="bg-white p-8 rounded-lg shadow-2xl shadow-gray-600  w-96 border border-gray-100 ">
      <p class="text-red-400 bg-blue-400 w-4 "></p>
      <h2 class="text-2xl font-semibold text-center mb-6">Student Log in</h2>
      <form @submit.prevent="login" class="space-y-4 ">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email" 
          class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
          required
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password" 
          class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
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
          <a href="#" class="text-blue-600 text-sm hover:underline">
           <RouterLink to="/studentregister">
            New? Create your account here!
          </RouterLink>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

