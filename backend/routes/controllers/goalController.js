const Goal = require("../../model/goalModel");

// GET
const getGoals = async (req, res, next) => {
	try {
		const goals = await Goal.find();
		res.status(200).json(goals);
	} catch (error) {
		next(error);
		// Pass the Error into errorMiddleware
	}
};

// POST
const postGoals = async (req, res, next) => {
	try {
		if (!req.body.text) {
			res.status(400).json({ message: "There is no input" });
			return;
		}

		const goal = await Goal.create({ text: req.body.text });
		res.status(200).json({ message: "New Goal Created", data: goal });
	} catch (error) {
		next(error);
	}
};

// UPDATE
const updateGoals = async (req, res, next) => {
	try {
		const requiredDocument = await Goal.findById(req.params.id);

		if (!requiredDocument) {
			res.status(404).json({ message: "Data Not Found!" });
			return;
		}

		const updateOptions = { new: true }; // Ensure updated document is returned
		const goal = await Goal.findByIdAndUpdate(
			req.params.id,
			{ text: req.body.text },
			updateOptions
		);

		res.status(200).json({ message: "Goal Updated!", data: goal });
	} catch (error) {
		next(error);
	}
};

// DELETE
const deleteGoals = async (req, res, next) => {
	try {
		const goal = await Goal.findByIdAndDelete(req.params.id);

		if (!goal) {
			res.status(404).json({ message: "Data Not Found!" });
			return;
		}

		res.status(200).json({ message: "Goal Deleted", data: goal });
	} catch (error) {
		next(error);
	}
};

module.exports = { getGoals, postGoals, updateGoals, deleteGoals };
