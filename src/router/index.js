
const express = require("express");
const userRouter = require("./user.route");
const movieRouter = require("./movie.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/movie", movieRouter);
module.exports = router;

//ROUTES > CONTROLLERS > MODELS > SCHEMA;
