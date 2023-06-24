




/*
to stop -> brew services stop mongodb-community
tostart -> brew services restart mongodb-community
*/
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//learning_mongodb => name of the new database

mongoose.connect('mongodb://localhost:27017/learning_mongodb',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(err){
            console.log("Connection Failed", err);
        }
        else{
            console.log("Connection Successful");
        }
    }
)

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    roll: Number,
    no_of_subjects: Number,
})
// /////////////// /////////////
const studentSch = new mongoose.Schema({
    name: String,
    class: String,
    roll: Number,
    no_of_subjects: Number,
})

// const Student1 = new mongoose.model("NewCollection", studentSchema)
const Student2 = new mongoose.model("NewCol", studentSch)


// const student1 = new Student1({name: "anvi", roll: 1, no_of_subjects: 7})
const student2 = new Student2({name: "qqq", roll: 4, no_of_subjects: 93});

// const insertData = async () => {
//     const result = await student1.save()
//     console.log(result)
// }
const insertData1 = async () => {
    const result1 = await student2.save()
    console.log(result1)
}

// insertData()
insertData1()


app.listen(5000, () => {
    console.log("Listening on port 5000")
});