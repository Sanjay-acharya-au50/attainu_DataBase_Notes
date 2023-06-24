
// const { Schema } = require("mongoose");
const mongoose = require("mongoose")



const myData = new mongoose.Schema({bike: String, name : String});


module.exports = myData;


