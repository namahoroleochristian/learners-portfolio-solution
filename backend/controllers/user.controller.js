"use strict";

import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import Student from '../models/student.model.js';
import Parent from '../models/parent.model.js';
import Teacher from '../models/Teacher.model.js';
import Admin from '../models/admin.model.js';

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


export const parentregister = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		if (!email || !password || !name ) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await Parent.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const parent = new Parent({
			email,
			password: hashedPassword,
			name,
			role:'parent',
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await parent.save();

		// jwt
		generateTokenAndSetCookie(res, parent._id);

		// await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...parent._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};



export const parentlogin = async (req, res) => {
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
		console.log("Error in parent ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};


export const getAllParents = async (req, res) => {
	try {
	  const parents = await Parent.find().select("-password");
  
	  res.status(200).json({
		success: true,
		count: parents.length,
		parents,
	  });
	} catch (error) {
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
export const deleteParent = async (req, res) => {
	const { id } = req.params; // student id from URL parameters
  
	try {
	  const deletedParent = await Parent.findByIdAndDelete(id);
  
	  if (!deletedParent) {
		return res.status(404).json({
		  success: false,
		  message: "Parent not found",
		});
	  }
  
	  res.status(200).json({
		success: true,
		message: "Parent deleted successfully",
	  });
	} catch (error) {
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






//// ------------------- TEACHER -------------------------------/////

export const teacherRegister = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		if (!email || !password || !name ) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await Teacher.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const teacher = new Teacher({
			email,
			password: hashedPassword,
			name,
			role:'parent',
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await teacher.save();

		// jwt
		generateTokenAndSetCookie(res, parent._id);

		// await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...teacher._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};



export const teacherlogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const teacher = await Teacher.findOne({email});
    
    
		if (!teacher) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
    
    
		const isPasswordValid = await bcryptjs.compare(password, teacher.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, teacher._id);

		teacher.lastLogin = new Date();
		await teacher.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			teacher: {
				...teacher._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in parent ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};


export const getAllTeacher = async (req, res) => {
	try {
	  const teachers = await Teacher.find().select("-password");
  
	  res.status(200).json({
		success: true,
		count: teachers.length,
		teachers,
	  });
	} catch (error) {
	  res.status(400).json({ success: false, message: error.message });
	}
  };
  
  export const deleteteacher = async (req, res) => {
	const { id } = req.params; // student id from URL parameters
  
	try {
	  const deletedTeacher = await Teacher.findByIdAndDelete(id);
  
	  if (!deletedTeacher) {
		return res.status(404).json({
		  success: false,
		  message: "Teacher not found",
		});
	  }
  
	  res.status(200).json({
		success: true,
		message: "Teacher deleted successfully",
	  });
	} catch (error) {
	  res.status(400).json({ success: false, message: error.message });
	}
  };
  


//// ------------------- TEACHER -------------------------------/////
//// ------------------- ADMIN -------------------------------/////

export const adminlogin = async (req, res) => {
	const { codename, password } = req.body;
	try {
		const admin = await Admin.findOne({codename});
    
    
		if (!admin) {
			return res.status(400).json({ success: false, message: "Invalid credentials consider Logging in using teacher or student portals or parent according to who you are" });
		}
    
    
		const isPasswordValid = await bcryptjs.compare(password, admin.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, admin._id);

		admin.lastLogin = new Date();
		await admin.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...admin._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in parent ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};
export const adminDefine = async (req, res) => {
	const { codename, password } = req.body;

	try {
		if (!codename || !password  ) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await Admin.findOne({ codename });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const admin = new Admin({
			codename,
			password: hashedPassword,
			role:'admin',
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});

		await admin.save();

		// jwt
		generateTokenAndSetCookie(res, admin._id);

		// await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...admin._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

//// ------------------- ADMIN -------------------------------/////




//// ------------------- COMMENTS  -------------------------------/////

import Comment from "../models/comments.model.js";

// Get all comments grouped by userType
export const getAllComments = async (req, res) => {
  try {
    const students = await Comment.find({ userType: "students" });
    const parents = await Comment.find({ userType: "parents" });
    const teachers = await Comment.find({ userType: "teachers" });

    res.json({ students, parents, teachers });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// Add a new comment
export const createComment = async (req, res) => {
  try {
    const { name, email, text, userType } = req.body;
    
    if (!name || !email || !text || !userType) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newComment = new Comment({ name, email, text, userType });
    await newComment.save();

    res.status(201).json({ message: "Comment added successfully", newComment });
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

// Delete a comment by ID
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};

//// ------------------- COMMENTS  -------------------------------/////