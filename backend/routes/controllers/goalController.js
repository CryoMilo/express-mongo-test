// @desc		get goals
// @route		GET /api/goals
// @access	Private
const getGoals = (req, res) => {
	res.status(200).json({ message: "Get Goals" });
};

// @desc		post goal
// @route		POST /api/goals
// @access	Private
const setGoal = (req, res) => {
	if (!req.body.test || "") {
		res.status(400);
		throw new Error("Please fill the text field!");
	}

	res.status(201).json({ message: `New Goal Set!` });
};

// @desc		update goal
// @route		PUT /api/goals/:id
// @access	Private
const updateGoal = (req, res) => {
	res.status(200).json({ message: "Get Goals" });
};

// @desc		delete goal
// @route		DELETE /api/goals
// @access	Private
const deleteGoal = (req, res) => {
	res.status(200).json({ message: "Get Goals" });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
