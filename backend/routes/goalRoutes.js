const express = require("express");
const {
	getGoals,
	postGoals,
	updateGoals,
	deleteGoals,
} = require("./controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(postGoals);

router.route("/:id").put(updateGoals).delete(deleteGoals);

// router.put("/:id", (req, res) => {
// 	res.status(200).json({ message: `Updated Goal ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
// 	res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
// });

module.exports = router;
