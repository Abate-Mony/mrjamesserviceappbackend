const { Application } = require("../models");


const create = async(req, res) => {
    await Application.create({...req.body });
    res.status(200).json({
        status: "ok"
    })
}
const get = async(req, res) => {
    const query = req.query
    var applications = null;
    applications = await Application.find({...query })

    res.status(200).json({
        applications,
        nHits: applications.length
    })
}
module.exports = {
    create,
    get
}