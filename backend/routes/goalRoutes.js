const express = require("express");
const {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
} = require("./controllers/goalController");
const router = express.Router();

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/", updateGoal);

// router.delete("/", deleteGoal);

router.route("/").get(getGoals).post(setGoal);
router.route("/").put(updateGoal).delete(deleteGoal);

module.exports = router;
