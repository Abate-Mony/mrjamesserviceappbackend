const { BadRequestError } = require("../error")
const jwt = require("jsonwebtoken")
module.exports = async(req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        throw BadRequestError("please provide auth header")

    }
    if (!header.startsWith("mrjames")) {
        throw BadRequestError("please provide a secret key")

    }
    const token = header.split(" ")[1]
    try {

        const payload = jwt.verify(token, process.env.jwtSecret, {})
        req.userInfo = payload._id
        next()

    } catch (err) {

        throw BadRequestError("invalid token or the token has expires")
    }

}