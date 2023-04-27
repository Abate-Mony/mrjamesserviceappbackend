const {
    createUser,
    updateUser,
    findUser
} = require("../controllers/User");

const express = require("express")
const router = express.Router()
router.route("/").post(createUser)
router.route("/:id").get(findUser).put(updateUser)

module.exports = router