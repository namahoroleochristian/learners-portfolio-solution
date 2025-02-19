// // frontend/src/main.js
// import { createApp } from 'vue';
// import './style.css'

// import App from './App.vue';
// import router from './router';

// createApp(App)
//     .use(router)
//     .mount('#app');
import { createApp } from 'vue';
import './style.css';

import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');
