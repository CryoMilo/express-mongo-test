const express = require("express");
const {
	registerUser,
	findUsers,
	loginUser,
	getMe,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", findUsers);

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/me", getMe);

module.exports = router;
