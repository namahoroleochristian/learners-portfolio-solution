// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Login from '../components/studentlogin.vue';

import register from '../components/studentregister.vue';
import adminlogin from '../components/adminlogin.vue';

import parentslogin from '../components/parentslogin.vue';
import teacherlogin from '../components/teacherlogin.vue';
import parentregister from '../components/parentregister.vue';
import studentdashboard from '../components/studentdashboard.vue';
import parentdashboard from '../components/parentdashboard.vue';
import admindashboard from '../components/admindashboard.vue';
import teacherdashboard from '../components/teacherdashboard.vue';
// import Home from '../views/Home.vue';
import HomePage from '../components/HomePage.vue';
import FileUpload from '../components/fileUpload.vue';
import PortfolioView from '../components/adminportfolioView.vue';

import Studentregister from '../components/studentregister.vue';
import Admindashboard from '../components/admindashboard.vue';
import Parentdashboard from '../components/parentdashboard.vue';
import Studentdashboard from '../components/studentdashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
 
  {
path:'/studentregister',
name:'studentregister',
component:Studentregister,
  },
  {
   path:'/parentregister',
   name:'parentregister',
   component:parentregister,
  },
  {
    path: '/studentLogin',
    name: 'Login',
    component: Login,
  },
  {
   path:'/parentslogin',
   name:'parentslogin',
   component:parentslogin,
  },
  {
   path:'/teacherlogin',
   name:'teacherlogin',
   component:teacherlogin,
  },
  {
    path:'/adminlogin',
    name:'adminlogin',
    component:adminlogin,
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
    path:'/studentdashboard',
    name:'studentdashboard',
    component:Studentdashboard,

  },
  {
    path:'/parentdashboard',
    name:'parentdashboard',
    component:Parentdashboard,
  },
  {
path:'/teacherdashboard',
name:'teacherdashboard',
component:teacherdashboard
  },
  {
    path:'/admindashboard',
    name:'admindashboard',
    component:admindashboard,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
