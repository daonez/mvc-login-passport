const mongoose = require("mongoose")
require("dotenv").config()

const connect = () => {
  try {
    mongoose.connect(
      process.env.MONGO_DB,
      { ignoreUndefined: true },
      { useUnifiedTopology: true, useNewUrlParser: true }
    )
    console.log("DB Connected")
  } catch (error) {
    if (error) {
      console.log("mongodb error", error)
    } else {
      console.log("connected")
    }
  }
}

module.exports = connect
