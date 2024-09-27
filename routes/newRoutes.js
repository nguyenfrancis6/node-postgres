const express = require("express");
const router = express.Router();
const newController = require('../controllers/newController')

router.get("/", newController.createUsernameGet);
router.post("/", newController.createUsernamePost);

module.exports = router;
