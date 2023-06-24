const express = require("express");


const app = express();

const mongoose = require("mongoose");
const { add } = require("./mongodb/mongo/mongodb");



mongoose.connect("mongodb://localhost:27017/bro", ()=>{
    console.log("mongodb-loading");
})

const mongoSchema = new mongoose.Schema({name : String, cast : String});

const Name = new mongoose.model("demo_created____", mongoSchema);

const added = new Name({name : "zenMan", cast: "xyz"});

added.save();

const myFind = async () =>{
    const foo = await Name.findOne({id: "63f7b77922ce6d8534277b22"})
    console.log(foo);
    
}
myFind()

app.listen(5000, ()=>{
    console.log("loading");
})