const express = require('express');
const router = express.Router();
const newController = require('../controllers/newController')

router.get("/", newController.getUsernames);
router.get("/search", newController.searchUsernameGet)
router.get("/delete", newController.deleteUsernamesGet)

module.exports = router;