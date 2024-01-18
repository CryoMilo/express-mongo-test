const mongoose = require("mongoose");
require("colors"); // Assuming you want to use colors for console output

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
		process.exit(1);
	}
};

// Handling unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.error(`Unhandled Rejection: ${err.message}`.red.bold);
	// Additional logging or error handling can be added here.
});

module.exports = connectDB;
