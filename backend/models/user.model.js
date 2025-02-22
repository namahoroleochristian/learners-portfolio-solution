import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name :{
        type:String,
        required :true
    },
    email :{
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
    isverified :{
        type:Boolean,
        default: false
    },
    
    passwordResetToken:String,
    passwordResetTokenExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
},{timestamps:true})
const User =  mongoose.model("Users",UserSchema) 
export default User
// lastLogin:Date.now,