const { AdminAuth } = require("../middlewares")

const {
    Application: {
        create,
        get
    }
} = require("../controllers");

const express = require("express")
const router = express.Router()
router.route("/").post(create).get(AdminAuth, get)

module.exports = router