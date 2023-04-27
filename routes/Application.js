const AdminAuth = require("../middlewares/AdminAuth")

const {
    create,
    get
} = require("../controllers/Application");

const express = require("express")
const router = express.Router()
router.route("/").post(create).get(AdminAuth, get)

module.exports = router