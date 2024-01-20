const express = require("express");
const {
	registerUser,
	findUsers,
	loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", findUsers);

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
