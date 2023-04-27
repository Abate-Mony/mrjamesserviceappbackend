const Application = require("../models/Appication");
const createApplication = async(req, res) => {
    await Application.create({...req.body });
    res.status(200).json({
        status: "ok"
    })
}
const getApplication = async(req, res) => {
    const query = req.query
    var applications = null;
    applications = await Application.find({...query })

    res.status(200).json({
        applications,
        nHits: applications.length
    })
}
module.exports = {
    createApplication,
    getApplication
}