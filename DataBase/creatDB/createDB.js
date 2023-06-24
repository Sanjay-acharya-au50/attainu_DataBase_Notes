// console.log("hello");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MySchema = require("./exportMod/schema")

// const MySchema = new mongoose.Schema({
//     name : String,
//     car : String,

// })

mongoose.connect("mongodb://localhost:27017/errorOcc", () => {
  
        console.log("mongo-db successfull");

        // MySchema.create({
        //     name : "sanX",
        //     car : "esteem",
        // })
})



// ------------------------------------
    const ClassName = new mongoose.model("colName", MySchema);
    const obj = new ClassName({
        name : "zenX",
        car : "dustor",
    })

    getData = async () => {
        let d = obj.save()
    }
    getData()
// ------------------------------------


app.get("/", (req,res)=>{
    res.send("hello world")
})

app.listen(5000, () => {
    console.log("loading");
})