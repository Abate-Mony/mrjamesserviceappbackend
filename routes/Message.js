const {
    createMessage,
    getMesage
} = require("../controllers/Message");
const userAuth = require("../middlewares/User.auth")
const express = require("express")
const router = express.Router()
router.route("/").post(userAuth, createMessage).get(userAuth, getMesage)


module.exports = router