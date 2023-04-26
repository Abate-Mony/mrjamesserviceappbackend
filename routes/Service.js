const {
    Service: {
        create,
        get,
        update,
        delete: _delete
    }
} = require("../controllers");

const express = require("express")
const router = express.Router()
router.route("/").post(create)

router.route("/:id").get(get).put(update).delete(_delete)

module.exports = router