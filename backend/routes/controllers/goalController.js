const Goal = require("../../models/goalModel");
const asyncHandler = require("express-async-handler");

// @desc		get goals
// @route		GET /api/goals
// @access	Private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();

	res.status(200).json(goals);
});

// @desc		post goal
// @route		POST /api/goals
// @access	Private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text || "") {
		res.status(400);
		throw new Error("Please fill the text field!");
	}

	const goal = await Goal.create({
		text: req.body.text,
	});

	res.status(201).json({ message: `New Goal Set!`, data: goal });
});

// @desc		update goal
// @route		PUT /api/goals/:id
// @access	Private
const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found!");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json({ message: "Goal updated!", data: updatedGoal });
});

// @desc		delete goal
// @route		DELETE /api/goals
// @access	Private
const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(404); // Change status to 404 for "Not Found"
		throw new Error("Goal not found!");
	}

	await goal.deleteOne({ _id: req.params.id }); // Remove the unnecessary argument

	res.status(200).json({ message: `${req.params.id} is Deleted!` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
