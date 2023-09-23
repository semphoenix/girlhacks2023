const express = require("express");
const router = express.Router();
const userService = require("./users.service");

router.post("/login", async function (req, res, next) {
  try {
    const { user } = await userService.login(req.body);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const { user } = await userService.register(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
});

router.get("/user/:id", async function (req, res, next) {
  try {
    const { user } = await userService.updateUser(req.params.id);
    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
