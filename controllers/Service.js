const { Service } = require("../models/")
const { BadRequestError } = require("../error")

module.exports = {

    create: async(req, res) => {

        const service = await Service.create({...req.body })

        res.status(200).json({
            service

        })

    },
    update: async(req, res) => {
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


    },
    delete: async(req, res) => {
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


    },
    get: async(req, res) => {

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


    },


}