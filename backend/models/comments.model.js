import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  userType: { type: String, enum: ["students", "parents", "teachers"], required: true },
  createdAt: { type: Date, default: Date.now }
});

 const Comment = mongoose.model("Comment", CommentSchema);
 export default Comment