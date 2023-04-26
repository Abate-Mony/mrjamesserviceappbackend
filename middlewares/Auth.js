const { BadRequestError } = require("../error")


const auth = async(req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("mrjames")) {
        throw BadRequestError("please provid an auth header")

    }
    const token = authHeader.split(" ")[1];
    if (!token) {

        throw BadRequestError("please provid a token")
    }
    req.id = token
    next()
}

module.exports = auth