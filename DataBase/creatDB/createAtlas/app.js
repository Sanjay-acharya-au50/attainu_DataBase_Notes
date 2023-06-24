// mongodb+srv://sanjayacharya992:<password>@cluster0.yknn4iq.mongodb.net/?retryWrites=true&w=majority

const express = require("express");

const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
 
const db = "mongodb://localhost:27017/clust"


    const MySchema = new mongoose.Schema(
{

        title : String,
        arr : String,
    })

    // const ClassName = new MySchema.model




mongoose.connect(db, ()=>{
        console.log("monodb running");
})







const getArr = async () =>{

    const ClassName = new mongoose.model("crDB", MySchema);
const obj = new ClassName({title : "san",arr : "duster"})
    // const insertMultipleData = async () => {
const obj1 = new ClassName({title : "man",arr : "esteem"})
const obj2 = new ClassName({title : "lam",arr : "dus"})
// const obj = new ClassName({title : "ban",arr : "polo"})
    const result = await ClassName.insertMany([obj, obj1, obj2]);
    console.log(result);
}
getArr()
     



getData = async () => {
    // let d = obj.save()
}
// getData()

app.get("/", (req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("5000 port running ");
})