//js
const express = require("express")
const app = express()
const loginRouter = require("./routes/login")
const passport = require("passport")
const { loginCheck } = require("./auth/passport")
const connect = require("./models")
const session = require("express-session")

connect()
loginCheck(passport)
const dotenv = require("dotenv")
dotenv.config()

app.set("view engine", "ejs")

//BodyParsing
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())
//Routes
app.use("/", require("./routes/login"))

app.get("/", (req, res) => {
  res.send("hello")
})

const PORT = 4000
app.listen(PORT, console.log("Server has started at port " + PORT))
