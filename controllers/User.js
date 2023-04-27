// const { BadRequestError } = require("../error")
const User = require("../models/AnonymousUser");

const createUser = async(req, res) => {
    await User.create({})
    res.status(200).json({
        status: "ok"
    })

}
const updateUser = async(req, res) => {

    res.send("update a user")

}
const findUser = async(req, res) => {

    res.send("find a user")

}
module.exports = {
    createUser,
    updateUser,
    findUser
}