// const express = require("express")

const mongoose  = require("mongoose");
const Detail = require("../../../../../../Sanjay-acharya-au50/backend_project/src/models/Detail");

const exporting = new mongoose.Schema({name : String, ex : String});

module.exports = exporting;


// const express = require("express")
// const mongoose = require("mongoose");

// const Detail = new mongoose.Schema({
//     brandName : String,
//     brandIconUrl : String,
//     links : [{
//         label : String,
//         url : String,
//     },
// ],
// })


// module.export = Detail; --> error
// module.exports = Detail; --> this works