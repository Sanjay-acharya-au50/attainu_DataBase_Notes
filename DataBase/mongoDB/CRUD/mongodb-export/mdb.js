
const express = require("express");

// ------------------imported file------------------

// schema structure difined in another file
const myData = require("./mdb-exp/mdb_exp"); 

// ------------------------------------

// again i want to import another file from different directory.

// ------------------ comment out for Err ------------------

// const expErr = require("./main/execute")
// const {expErr} = require("./main/execute");

// ------------------------------------

const app = express();

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/exp-mongod", ()=>{
    console.log("mongo connecting : new");
})



// const myData = new mongoose.Schema({bike: String, name : String});

const MyClass = new mongoose.model("colection", myData);

const obj = new MyClass ({bike :"R1", name : "sanZ"});

obj.save();

app.get("/", async (req,res)=>{

        // const data = await MyClass.find({_id : "63f8693ac351c73b3ec3d2bb"});
        // const data = await MyClass.find();
        // console.log(data);
        res.send("hello ")
    }

);

// ---------------- comment out tor Err----------------
// console.log(expErr());
// --------------------------------



const getData = async () => {
    const data = await MyClass.find();
    console.log(data);
  }
//   getData();

// const getData = async ()=> {
//     const data = await MyClass.find({_id : "63f868b11527c8970618c4d1"});
//     console.log(data);
// }



app.listen(5001, ()=>{
    console.log("loading");
})



module.exports = getData;