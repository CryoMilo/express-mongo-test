const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
	{
		text: {
			type: String,
			require: [true, "Text Field is required mate"],
		},
	},
	{ timestamps: true }
);

const goalModel = mongoose.model("Goal", goalSchema);

module.exports = goalModel;
