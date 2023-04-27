const AdminAuth = require("../middlewares/AdminAuth")

const {
    createApplication,
    getApplication
} = require("../controllers/Application");

const express = require("express")
const router = express.Router()
router.route("/").post(createApplication).get(AdminAuth, getApplication)

module.exports = router