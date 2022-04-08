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

app.set("view engine", "ejs")
//Routes
app.use("/", loginRouter)
app.get("/", (req, res) => {
  res.send("hello")
})

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

const PORT = 4000
app.listen(PORT, console.log("Server has started at port " + PORT))
