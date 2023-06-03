// const { BadRequestError } = require("../error")
const User = require("../models/AnonymousUser");

const createUser = async(req, res) => {
    const user = await User.create({})
    const token = await user.createJWT()
    res.status(200).json({
        user: user._id,
        token
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