const express = require("express");
const router = express.Router();
const workoutsService = require("./workouts.service");

/* POST req to create a recipe */
router.post("/createWorkouts", async (req, res, next) => {
  try {
    const { workouts } = await workoutsService.createWorkouts(req.body);
    return res.status(200).json({ workouts });
  } catch (err) {
    next(err);
  }
});

router.post("/addWorkout", async (req, res, next) => {
  try {
    const { workout } = await workoutsService.addWorkout(req.body);
    return res.status(200).json({ workout });
  } catch (err) {
    next(err);
  }
});

router.get("/getWorkouts/:id", async (req, res, next) => {
  try {
    const { workouts } = await workoutsService.getWorkouts(req.params.id);
    return res.status(200).json({ workouts });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
