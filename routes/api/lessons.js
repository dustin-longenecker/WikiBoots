const router = require("express").Router();
const lessonsController = require("../../controllers/lessonsController");

router.route("/")
.get(lessonsController.findAll)
.post(lessonsController.create);

router.route("/:id")
.get(lessonsController.findById)
.put(lessonsController.update)
.delete(lessonsController.remove);

module.exports = router;