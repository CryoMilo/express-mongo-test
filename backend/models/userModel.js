const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please insert name"],
		},
		email: {
			type: String,
			required: [true, "Please insert email"],
		},
		password: {
			type: String,
			required: [true, "Please insert password"],
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
