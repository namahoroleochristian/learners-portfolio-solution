import { Router } from "express";
import { checkAuth, login, logout, signup, studentlogin, studentregistration } from "../controllers/user.controller.js";
const user_router = Router()
 user_router.post('/signup',signup) 
 user_router.post('/studentRegistration',studentregistration) ;
//  user_router.delete('/DeleteUser/:id',DeleteUsers) 
//  user_router.get('/GetUsers',GetUsers)
 user_router.post('/Login',login);
 user_router.post('/studentLogin',studentlogin);
 user_router.post('/logout',logout)
 user_router.post('/checkAuth',checkAuth)

 export default user_router;