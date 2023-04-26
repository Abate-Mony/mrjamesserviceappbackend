const {
    Admin: {
        login
    }
} = require("../controllers");

const express = require("express")
const router = express.Router()
router.route("/login").post(login)
module.exports = router