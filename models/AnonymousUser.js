const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    identity: {
        type: String,
        required: false,
        default: "anonymous"
    },
})
const userschema = model("user", userSchema);
module.exports = userschema