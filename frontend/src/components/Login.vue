<!-- frontend/src/components/Login.vue -->
<template>
  <div class="flex w-full h-screen flex-col justify-center items-center">
    <form @submit.prevent="login" class="flex w-3/6 flex-col bg-slate-200 p-16 rounded-xl shadow-lg border border-gray-100 items-center">
      <h1 class="text-center mt-3 font-mono text-4xl font-bold mb-10 ">Login</h1>
      <input v-model="email" type="email" class="p-2 bg-slate-300 m-2 w-full rounded-lg  outline-none  font-mono text-xl focus:ring-2 ring-blue-300" placeholder="Email" required />
      <input v-model="password" type="password" class="p-2 bg-slate-300 m-2 w-full rounded-lg  outline-none font-mono  text-xl  focus:ring-2 ring-blue-300" placeholder="Password" required />
      <button type="submit" class="bg-slate-600 w-90  py-3  text-xl font-mono mt-10 rounded-xl text-white hover:  hover:bg-slate-700">Login</button>
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
</script>
