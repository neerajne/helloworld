const express = require("express");
const router = express.Router();
const helloWorld = require('../controllers/helloWorldController');

router.route("/hello").get(helloWorld);

module.exports = router;
