require("dotenv").config()
require("express-async-errors")
const cors = require("cors")
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
    // const { NOTFOUND, ERROR, /*AdminAuth*/ } = require("./middlewares")
    // const { Admin } = require("./models")

// const { Application, User, Message, Admin: admin, Service } = require("./routes")
// const Auth = require("./middlewares/Auth")
app.get("/", (req, res) => {
        res.send("hello world user")

    })
    // app.use("/application", Application)
    // app.use("/auth", User)
    // app.use("/message", Auth, Message)
    // app.use("/admin", admin);
    // app.use("/service", AdminAuth, Service)
    // app.use(ERROR)
    // app.use(NOTFOUND)


const start = async() => {
    try {
        app.listen(port, function() {
            console.log(`app is running on port ${port }`)
        })
        require("./db/connections");
        // await Admin.deleteMany({});
        // await Admin.create({
        //     phone: 672301714,
        //     password: "mrjames"
        // })

    } catch (err) {
        console.log(err)
    }
}
start()