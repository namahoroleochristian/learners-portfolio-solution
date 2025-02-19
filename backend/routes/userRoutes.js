import { Router } from "express";
import { InsertUser,DeleteUsers,GetUsers } from "../controllers/user.controller.js";
const user_router = Router()
 user_router.post('/RegisterUser',InsertUser) 
 user_router.delete('/DeleteUser/:id',DeleteUsers) 
 user_router.get('/GetUsers',GetUsers)
 export default user_router;