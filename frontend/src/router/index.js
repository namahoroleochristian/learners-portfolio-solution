// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Login from '../components/Login.vue';
// import Home from '../views/Home.vue';
import HomePage from '../components/HomePage.vue';
import FileUpload from '../components/fileUpload.vue';
import PortfolioView from '../components/portfolioView.vue';
import portfolioUpload from '../components/portfolioUpload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: FileUpload,
  },
  {
    path: '/view',
    name: 'portfolioView',
    component: PortfolioView,
  },
  {
    path: '/testCalledUpload',
    name: 'testCalledUpload',
    component: portfolioUpload,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
