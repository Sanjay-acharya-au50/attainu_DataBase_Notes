const express = require("express");
const app = express();

const exporting = require("./mongo/mongodb");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/exported_mongo_db", ()=>{
    console.log("mongo-connected");
})

const ClassName = new mongoose.model("exported_col_name", exporting);

const newObj = new ClassName({name:"anvi", ex : "roh"})

newObj.save();


app.listen(5000,()=>{
    console.log("server loading");
})




// const express = require("express");
// const app = express();
// const Detail = require("./mongo/mongodb")
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/testing", () => {
  
//         console.log("mongo-db successfull");
// })

// const MySchema = new mongoose.model("details_test", Detail);
// const mySchemaObj = new MySchema({
//     brandName: "e-learning",
//     brandIconUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--KCRN0Wuf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/356/ceb8dc0f-a77b-4f89-84da-52216a4286e1.png",
    // links: [{
        //     name: "Home",
        //     url: "/home"
        // },
        // {
        //     name: "Services",
        //     url: "service"
        // },
        // {
        //     name: "gallery",
        //     url: "/gallery"
        // },
        // {
        //     name: "none",
        //     url: "/empty"
        // },
        // {
        //     name: "Conatct-US",
        //     url: "contact"
        // },
        // ]
    // })
    
    // mySchemaObj.save();
    
    
    
    
    // app.get("/", (req, res) => {
    //     res.send("hello this is working")
    // })
    
    // app.listen(5000, () => {
    //     console.log("server is loading");
    // });
    