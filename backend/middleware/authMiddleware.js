const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			//Get the token from Totken String
			const token = req.headers.authorization.split(" ")[1];

			//Verify the Token
			const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

			req.user = User.findById(verified.id).select("-password");

			next();
		} catch (error) {
			return res.status(401).json({
				message: "Not Authorized",
			});
		}
	}
});

module.exports = { protect };
