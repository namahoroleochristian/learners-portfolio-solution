import { Router } from "express";
import { checkAuth, getAllStudents, logout, signup, studentlogin, studentregistration, deleteStudent, parentlogin, parentregister, getAllParents, deleteParent, teacherlogin, teacherRegister, getAllTeacher, deleteteacher, adminlogin, adminDefine, getAllComments, createComment, deleteComment } from "../controllers/user.controller.js";
const user_router = Router()
 user_router.post('/signup',signup) 
 
 //----------student-------\\
 user_router.post('/studentRegistration',studentregistration) ;
 user_router.post('/studentLogin',studentlogin);
 user_router.get('/getStudents',getAllStudents)
 user_router.delete('/deletestudent/:id',deleteStudent);

 //----------student-------\\
 //----------parent-------\\
 user_router.post('/parentlogin',parentlogin);
 user_router.post('/parentregister',parentregister) 
 user_router.get('/getparents',getAllParents) 
 user_router.delete('/deleteparent/:id',deleteParent) 


//----------parent-------\\




//---------- TEACER -------\\
user_router.post('/teacherlogin',teacherlogin);
user_router.post('/teacherregister',teacherRegister) 
user_router.get('/getteachers',getAllTeacher) 
user_router.delete('/deleteteacher/:id',deleteteacher) 
//---------- TEACER -------\\S
//---------- ADMIN -------\\

user_router.post('/ReservedLogin',adminlogin) 
// user_router.post('/ReservedDefinition',adminDefine) 

//---------- ADMIN -------\\
//---------- COMENTS -------\\
user_router.get("/getccomments", getAllComments);

// Create a new comment
user_router.post("/makeccomments", createComment);

// Delete a comment
user_router.delete("/deletecomment/:id", deleteComment);

//---------- COMENTS -------\\





//  user_router.delete('/DeleteUser/:id',DeleteUsers) 
//  user_router.get('/GetUsers',GetUsers)
 user_router.post('/logout',logout)
 user_router.post('/checkAuth',checkAuth)

 export default user_router;