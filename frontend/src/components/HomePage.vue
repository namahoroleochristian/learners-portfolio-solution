<!-- 
<script setup>

</script>
<template>
    <div class="flex flex-col items-center m-6 lg:mt-32 lg:ml-16 p-5 h-5/6 w-9/10 text-center rounded-xl border border-gray-200  shadow-2xl ">
        
      <h1 class="mt-3 font-mono text-4xl font-bold">Welcome to Student Digital Portfolio</h1>
      <h2 class="p-2 text-red-400"> 
        Either if you are student , parents , teacher and DOS you are able to use this application</h2>

      <h2 class="text-sm mb-16 font-mono  mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia omnis <br> molestias excepturi?  Temporibus ut quae nam officiis laborum sunt. Lorem, ipsum  <br>dolor sit amet consectetur adipisicing elit. Provident ex commodi, nobis recusandae <br> praesentium vitae veritatis deleniti iste ut, magni <br> tenetur qui, ipsa optio nostrum. Labore rerum quidem quasi atque!</h2>
      <RouterLink to="/Login" class=" bg-slate-600 px-25 py-4 w-2/6 text-xl font-mono mt-10 rounded-xl text-white text-center hover:  hover:bg-slate-700">Login</RouterLink>
       
</div>
     
</template> -->

<template>
  <div class="flex flex-col min-h-screen w-full text-center bg-fixed bg-cover bg-center"
    style="background-image: url('/bg.png');">
    
    <header class="bg-blue-700 text-white py-4 px-6 text-xl font-semibold shadow-md">
      Student Digital Portfolio
    </header>

    <main class="flex flex-col items-center justify-center flex-grow p-6">
      
      <h1 class="text-4xl font-bold text-blue-700">Welcome to Student Digital Portfolio</h1>
      <h4 class="text-black-400 mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo illum reiciendis dolores 
        et accusamus! Voluptate nesciunt eum repellendus doloremque minus repudiandae reiciendis
         consequuntur dolore, nisi facilis obcaecati labore animi atque!</h4>
      <p class="text-lg text-gray-700 mt-5">Select your login option below:</p>
      <div class="mt-6 space-x-4 flex flex-wrap justify-center">
        <RouterLink to="/studentlogin" class="px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Student</RouterLink>
        <RouterLink to="/parentslogin" class="px-6 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Parent </RouterLink>
        <RouterLink to="/teacherlogin" class="px-6 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Teacher</RouterLink>
        <RouterLink to="/adminlogin" class="px-6 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">other</RouterLink>
      </div>
    </main>

    <footer class="bg-gray-900 text-white py-0.2 text-center text-sm mt-auto text-ml">
      &copy; 2025 STUDENT DIGITAL PORTFOLIO . All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: "StudentPortfolio"
};
</script>
