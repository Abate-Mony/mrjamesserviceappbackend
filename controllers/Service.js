const Service = require("../models/Service")
const { BadRequestError } = require("../error")

const createService = async(req, res) => {
    const service = await Service.create({...req.body })
    res.status(200).json({
        service
    })
}
const updateService = async(req, res) => {
    const { params: { id }, body } = req
    const updatedservice = await Service.findOneAndUpdate({
        _id: id
    }, {...
        body
    }, { new: true })
    if (!updatedservice) {
        throw BadRequestError("fail to update the application this error can occur if the application has already benn deleted")
    }
    res.status(200).
    json({
        service: updatedservice
    })


}
const deleteService = async(req, res) => {
    const { id: _id } = req.params;
    const isDel = await Service.findOneAndDelete({
        _id
    })
    if (!isDel) {
        throw BadRequestError("fail to delete the application this error can occur if the application has already benn deleted")
    }
    res.status(200).json({
        status: "ok"

    })


}
const getService = async(req, res) => {

    const { id } = req.params;
    var services = null
    if (id === "*") {
        services = await Service.find({})

    } else {
        services = await Service.find({ _id: id })
    }
    res.status(200).
    json({
        services,
        nHits: services.length

    })


}






module.exports = {
    createService,
    updateService,
    deleteService,
    getService

}