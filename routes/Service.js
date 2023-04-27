const {
    createService,
    updateService,
    deleteService,
    getService
} = require("../controllers/Service");

const express = require("express")
const router = express.Router()
router.route("/").post(createService)

router.route("/:id").get(getService).put(updateService).delete(deleteService)

module.exports = router