const express = require("express");
const router = express.Router();
const  {welcomeMessage}  = require("../controller/welcomeController"); 

router.route("/welcome").get(welcomeMessage)
 module.exports = router;	