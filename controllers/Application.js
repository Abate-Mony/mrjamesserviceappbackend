const { BadRequestError } = require("../error")

const { Application } = require("../models");


const create = async(req, res) => {
    await Application.create({...req.body });
    res.status(200).json({
        status: "ok"
    })
}
const get = async(req, res) => {
    const { id } = req.params
    var applications = await Application.find({})

    res.status(200).json({
        applications
    })
}
module.exports = {
    create,
    get
}