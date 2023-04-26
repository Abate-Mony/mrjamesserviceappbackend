const { Schema, model } = require("mongoose");
const serviceSchema = new Schema({

    service: {
        type: String,
        required: [true, "please send the name of the service"],
        min: [3, "the min length required is 3"],
    },
    descriptions: {
        type: Array,
        required: [true, "please send the descriptions"],
        min: [5, "the min length required is 5"],
    }


})

const serviceschema = model("services", serviceSchema)
module.exports = serviceschema