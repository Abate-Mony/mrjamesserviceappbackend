// const { BadRequestError } = require("../error")
const { User } = require("../models");

const create = async(req, res) => {
    await User.create({})
    res.status(200).json({
        status: "ok"
    })

}
const update = async(req, res) => {

    res.send("update a user")

}
const find = async(req, res) => {

    res.send("find a user")

}
module.exports = {
    create,
    update,
    find
}