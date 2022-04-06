//js
const express = require("express")
const app = express()
const loginRouter = require("./routes/login")

app.set("view engine", "ejs")
//Routes
app.use("/", loginRouter)
app.get("/", (req, res) => {
  res.send("hello")
})
const PORT = 4000
app.listen(PORT, console.log("Server has started at port " + PORT))
