const getGoals = (req, res) => {
	res.status(200).json({ message: "Get GGoals" });
};

const postGoals = (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Cap. There is no damn input mate");
	}

	res.status(200).json({ message: "Post Goals" });
};

const updateGoals = (req, res) => {
	res.status(200).json({ message: "Update Goals" });
};

const deleteGoals = (req, res) => {
	res.status(200).json({ message: "Delete Goals" });
};

module.exports = { getGoals, postGoals, updateGoals, deleteGoals };
