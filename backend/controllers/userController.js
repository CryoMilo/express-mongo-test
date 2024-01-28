const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");

// COMMON
const invalidCred = (res) => {
	return res.status(401).json({
		message: "Invalid credentials",
	});
};

const generateJWT = (id) => {
	return jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
		expiresIn: "1hr",
	});
};

// @desc		find users
// @route		GET /api/users
// @access	Private
const findUsers = asyncHandler(async (req, res) => {
	const users = await User.find();

	res.status(200).json({ message: "success", data: users });
});

// @desc		register users
// @route		POST /api/users
// @access	Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please fill all required field!");
	}

	// Check if there's user
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists!");
	}

	//hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hashSync(password, salt);

	const user = await User.create({
		name: name,
		email: email,
		password: hashedPassword,
	});

	res.status(201).json({ message: "User Registered", data: user });
});

// @desc		login user
// @route		POST /api/users/login
// @access	Public
const loginUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email: email, name: name });

	if (!userExists) {
		invalidCred(res);
	}

	if (userExists) {
		const passwordsMatch = await bcrypt.compare(password, userExists.password);
		if (passwordsMatch) {
			generateJWT(userExists._id);
			res.status(200).json({
				message: "You're In!",
				data: {
					_id: userExists._id,
					name: name,
					email: email,
					token: token,
				},
			});
		} else invalidCred();
	}
});

// @desc		get user data
// @route		POST /api/users/me
// @access	Private
const getMe = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Displaying user data" });
});

module.exports = { findUsers, registerUser, loginUser, getMe };
