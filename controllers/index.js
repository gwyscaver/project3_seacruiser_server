const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const chatRoutes = require("./chat");

router.use('/auth',authRoutes);
router.use("/chat",chatRoutes);

router.get("/thisisatest", (req, res)=> res.send("Hi"))
module.exports = router;