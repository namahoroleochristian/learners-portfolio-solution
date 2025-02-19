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
    isverified :{
        type:Boolean,
        default: false
    },
    
    passwordResetToken:String,
    passwordResetTokenExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
},{timestamps:true})
const UserModel =  mongoose.model("Users",UserSchema) 
export default UserModel
// lastLogin:Date.now,