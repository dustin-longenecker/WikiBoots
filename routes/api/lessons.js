const router = require("express").Router();
const lessonsController = require("../../controllers/lessonsController");

router.route("/")
.get(lessonsController.findAll)
.post(lessonsController.createLesson);

router.route("/:id")
.get(lessonsController.findById)
.put(lessonsController.update)
.post(lessonsController.createNote)
.delete(lessonsController.remove);


module.exports = router;