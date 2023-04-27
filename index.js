require("dotenv").config()
require("express-async-errors")
const cors = require("cors")
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
const { NOTFOUND, ERROR } = require("./middlewares")
    // const Admin = require("./models/Admin")

// const { Application, User, Message, Admin: admin, Service } = require("./routes")
const Application = require("./routes/Application")
const User = require("./routes/User")
const Message = require("./routes/Message")
const admin = require("./routes/Admin")
const Service = require("./routes/Service")
const Auth = require("./middlewares/Auth")
app.get("/", (req, res) => {
    res.send("hello world user");
    console.log("this is the main router")
})
app.use("/application", Application)
app.use("/auth", User)
app.use("/message", Auth, Message)
app.use("/admin", admin);
app.use("/service", Service)
app.use(ERROR)
app.use(NOTFOUND)
module.exports = app

const start = async() => {
    try {
        app.listen(port, function() {
            console.log(`app is running on port ${port }`)
        })
        require("./db/connections");
        await Admin.deleteMany({});
        await Admin.create({
            phone: 672301714,
            password: "mrjames"
        })
    } catch (err) {
        console.log(err)
    }
}
start()