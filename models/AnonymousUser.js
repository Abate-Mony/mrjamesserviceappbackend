const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken")
const userSchema = new Schema({
    identity: {
        type: String,
        required: false,
        default: "anonymous"
    },
})

userSchema.methods.createJWT = async function() {
    return await jwt.sign({ _id: this._id }, process.env.jwtSecret, { expiresIn: "10d" });
}


const userschema = model("user", userSchema);
module.exports = userschema