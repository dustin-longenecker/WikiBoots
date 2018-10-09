const router = require("express").Router();
const lessonRoutes = require("./lessons"); 

router.use("/lessons", lessonRoutes); 

module.exports = router;