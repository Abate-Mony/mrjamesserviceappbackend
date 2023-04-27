const Message = require("../models/Message");
const createMessage = async(req, res) => {
    const { id, body } = req
    res.status(200).send(
        "create message route here" + id
    )



}
module.exports = {
    createMessage
}