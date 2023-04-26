const { Message } = require("../models");
module.exports = {

    create: async(req, res) => {
        const { id, body } = req
        res.status(200).send(
            "create message route here" + id
        )



    }




}