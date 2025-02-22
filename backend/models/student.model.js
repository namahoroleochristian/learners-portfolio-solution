import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["viewer", "editor", "admin"],
      required: true,
    },
    userType: { // Added userType field
      type: String,
      enum: ["student", "parent", "teacher", "admin"],
      required: true,
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: String,
    passwordResetTokenExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);
export default User;