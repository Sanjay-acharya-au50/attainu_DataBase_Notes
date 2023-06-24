
const mongoose = require("mongoose")

const MySchema = new mongoose.Schema({
    name : String,
    car : String,
})
module.exports = MySchema;