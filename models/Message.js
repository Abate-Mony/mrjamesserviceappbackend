const { Schema, model, } = require("mongoose")
const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.ObjectId,
        required: true,
        ref: "user"
    },
    sentTo: {
        type: Schema.ObjectId,
        required: true,
        ref: "user"

    }

}, {
    timestamps: true
});


const messageschema = model("message", messageSchema);


module.exports = messageschema