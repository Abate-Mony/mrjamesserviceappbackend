const { Schema, model } = require("mongoose")


const UserSchema = new Schema(

    {

        service_type: {
            type: String,
            required: [true, "please provide a service type"],
            minLength: 3,

        },
        fullname: {
            type: String,
            required: [true, "please provide a user  name"],
            minLength: 3,

        },
        phone: {
            type: Number,
            required: [true, "please provide a number"],
            minLength: 6,
            maxLength: 10,
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
                values: ["male", "female"]
            }
        },
        message: {
            type: String,
            required: false,
            default: "this user didnot send any message"
        }


    }, {

        timestamps: true
    }

)
const userschema = model("Application", UserSchema)
module.exports = userschema