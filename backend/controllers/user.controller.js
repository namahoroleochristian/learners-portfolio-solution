"use strict";

import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import Student from '../models/student.model.js';

export const signup = async (req, res) => {
	const { email, password, name,role } = req.body;

	try {
		if (!email || !password || !name || !role) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await User.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const user = new User({
			email,
			password: hashedPassword,
			name,
			role,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await user.save();

		// jwt
		generateTokenAndSetCookie(res, user._id);

		// await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};
export const studentregistration = async (req, res) => {
	const { email, password, name,role,registrationNumber } = req.body;

	try {
		if (!email || !password || !name || !role || !registrationNumber) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await Student.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const student = new Student({
			email,
			password: hashedPassword,
			name,
			role,
			registrationNumber,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await student.save();

		// jwt
		generateTokenAndSetCookie(res, student._id);

		// await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...student._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};


export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({email});
    
    
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
    
    
		const isPasswordValid = await bcryptjs.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, user._id);

		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};
export const studentlogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const student = await Student.findOne({email});
    
    
		if (!student) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
    
    
		const isPasswordValid = await bcryptjs.compare(password, student.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, student._id);

		student.lastLogin = new Date();
		await student.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			student: {
				...student._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};
export const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};


// Update a student
export const updateStudent = async (req, res) => {
  const { id } = req.params; // student id from URL parameters
  const updates = req.body;   // fields to update

  try {
    // If password is provided, hash it before updating
    if (updates.password) {
      updates.password = await bcryptjs.hash(updates.password, 10);
    }

    const updatedStudent = await Student.findByIdAndUpdate(id, updates, {
      new: true, // return the updated document
      runValidators: true,
    });

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student: {
        ...updatedStudent._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  const { id } = req.params; // student id from URL parameters

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Retrieve all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select("-password");

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
