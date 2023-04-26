const { Schema, model } = require("mongoose");
const bcrypts = require("bcryptjs")
const jwt = require("jsonwebtoken")
const adminSchema = new Schema({
    phone: {
        type: Number,
        require: [true, "please provide a phone number"]
    },
    password: {
        type: String,
        required: true
    }

})
adminSchema.pre("validate", async function(next) {
    const salt = await bcrypts.genSalt(10);
    this.password = await bcrypts.hash(this.password, salt);
})
adminSchema.methods.createJWT = async function() {
    return (jwt.sign({ _id: this._id, phone: this.phone }, process.env.jwtSecret, { expiresIn: "1d" }))
}
adminSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypts.compare(candidatePassword, this.password);
    return isMatch;
}
const adminschema = model("admins", adminSchema);
module.exports = adminschema