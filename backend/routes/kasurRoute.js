const express = require("express");
const router = express.Router();
const { createKasur } = require("../controllers/kasurController.js");

router.post("/kasur", createKasur);

module.exports = router;
