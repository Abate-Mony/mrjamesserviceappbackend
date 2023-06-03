const Message = require("../models/Message");
const User = require("../models/AnonymousUser");
const { BadRequestError } = require("../error");
const createMessage = async(req, res) => {

    const isUser = await User.findOne({
        _id: req.userInfo
    })
    if (!isUser) {
        throw BadRequestError("user not found please tryagain")
    }
    const obj = {
        ...req.body,
        createdBy: req.userInfo
    }
    const message = await Message.create({...obj })
    res.status(200).json({ message });
}
const getMesage = async(req, res) => {
    const userId = req.query.userid;
    if (userId) {
        const m1 = await Message.find({ sentTo: userId });
        const m3 = await Message.find({ createdBy: userId });
        const combinem = [...m1, ...m3].sort((a, b) => b.createdAt - a.createdAt);
        res.status(200).json({ message: combinem, nHits: combinem.length });
        return
    }
    const id = req.userInfo
    const m1 = await Message.find({ createdBy: id })
    const m2 = await Message.find({ sentTo: id })

    const combinem = [...m1, ...m2].sort((a, b) => b.createdAt - a.createdAt)
    res.status(200).json({ message: combinem, nHits: combinem.length })
}

module.exports = {
    createMessage,
    getMesage
}