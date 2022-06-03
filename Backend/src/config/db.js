const mongoose = require("mongoose");

require("dotenv").config(); //connect mongoDb to heroku deployment

module.exports= ()=>{

    return mongoose.connect(process.env.MONGODB_URL)
}