const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/user.model");

userRouter.get("/", (req, res) => {
  res.send("Response Coming from User");
});
userRouter.post("/create", async (req, res) => {
  try {
    const payload = req.body;
    // console.log(payload);
    const user = new userModel(payload);
    // console.log("new user created");
    const newUser = await user.save();
    res.send(newUser);
  } catch {
    res.status(500).send("Error In creatting new user");
  }
});
userRouter.get("/:id", async (req, res) => {
  // console.log(req.params.id)
});

module.exports = userRouter;
