const { Schema, model } = require("mongoose")


const UserSchema = new Schema({
        service_type: {
            type: String,
            required: [true, "please provide a service type"],
            minLength: 3,

        },
        fullname: {
            type: String,
            required: [true, "please provide a user  name"],
            min: [3, "please your name must be greater or equals to 3"]

        },
        phone: {
            type: Number,
            required: [true, "please provide a number"],
            min: [6, "value must be greater than 6"],
            uniqued: true
        },
        email: {
            type: String,
        },

        date: {
            type: Date,
            required: [true, "please provide a date"],
        },
        time: {
            type: String,
            required: [true, "please provide a time"],
        },
        age: {
            type: Number,
            required: [true, "please provide an age "],
        },
        sex: {
            type: String,
            required: [true, "please provide an age "],
            enum: {
                values: ["male", "female"],
                message: `{} is not supported`
            }
        },
        message: {
            type: String,
            required: false,
            default: "this user didnot send any message"
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        }

    }, {

        timestamps: true
    }

)
const userschema = model("Application", UserSchema)
module.exports = userschema