import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    codename :{
        type:String,
        unique: true,
        required :true

    },
  
    password: {
        type:String,
        required:true
    },
    role: {
        type:String,
        required:true
    },
   
    
    passwordResetToken:String,
    passwordResetTokenExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
},{timestamps:true})
const Admin =  mongoose.model("Admin",AdminSchema) 
export default Admin  
// lastLogin:Date.now,