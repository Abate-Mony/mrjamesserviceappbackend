const { Admin } = require("../models");
const { BadRequestError } = require("../error")

module.exports = {

    login: async(req, res) => {

        const isUser = await Admin.findOne({
            phone: req.body.phone
        })
        if (!isUser) {
            throw BadRequestError("invalid phone number")

        }
        const decodedPassword = await isUser.comparePassword(req.body.password);
        if (!decodedPassword) {
            throw BadRequestError("invalid password")
        }
        const token = await isUser.createJWT()
        res.status(200).json({
            "token": token
        })

    }


}