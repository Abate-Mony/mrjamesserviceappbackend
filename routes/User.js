const {
    User: {
        create,
        update,
        find
    }
} = require("../controllers");

const express = require("express")
const router = express.Router()
router.route("/").post(create)
router.route("/:id").get(find).put(update)

module.exports = router