const {
    createMessage
} = require("../controllers/Message");

const express = require("express")
const router = express.Router()
router.route("/").post(createMessage)

module.exports = router