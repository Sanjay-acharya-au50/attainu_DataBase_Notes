const mongoose = require('mongoose')
const express = require('express')
const app = express()
mongoose.set('strictQuery', false)

//learning_mongodb => name of the new database

mongoose.connect('mongodb://localhost:27017/f',
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

        
        
                title : String,
                arr : String,

})

const Student = new mongoose.model("NewCollection", studentSchema)

const student1 = new Student({title: "Abhishek", arr: "ddd" })

//Insert
// const insertData = async () => {
//     const result = await student1.save()
//     console.log(result)
// }

const insertMultipleData = async () => {
    const student1 = new Student({title: "Abhishek", arr: "ddd" })
const student2 = new Student({title: "Abhishek", arr: "ddd" })
const student3 = new Student({title: "Abhishek", arr: "ddd" })

    const result = await Student.insertMany([student1, student2, student3]);
    console.log(result);
}

// insertData()
insertMultipleData()

//Read
const getData = async () => {
    // const result = await Student.find().sort({name: 1})     //1 -> ascending -1 -> descending
    // const result = await Student.find().select({name: 1})
    // const result = await Student.find({roll: {$gt: 5, $lt: 8}});
    const result = await Student.find({roll: {$in: [6,7,8,11]}});     // [6,7,10,11]
    console.log(result);
}

//Functions for Read operation
//limit()
//sort()
//select()
//count()

//Update
//Approach 1: Query First   => find the data -> modify -> save
//Approach 2: Update First => update the data directly

//Query First approach
const updateData = async (id) => {
    //1st step
    const studentToUpdate = await Student.findById(id);
    if(!studentToUpdate){
        console.log("No data found");
        return;
    }
    //2nd step
    studentToUpdate.name = "Rohit"
    studentToUpdate.class = "X"
    //OR
    studentToUpdate.set({
        name: "Rohit",
        class: "x"
    })
    //3rd step
    const result = await studentToUpdate.save()
    console.log(result);
}

//Update first approach
const updateDataDirectly = async (id) => {
    const studentToUpdate = await Student.updateOne({_id: id}, {$set: { class: "XII" }})
    console.log(studentToUpdate)
}

const updateManyData = async () => {
    const studentsToUpdate = await Student.updateMany({name: "Abhishek"}, {$set: {no_of_subjects: 8}})
    console.log(studentsToUpdate);
}

//Delete
const deleteData = async (id) => {
    const studentToDelete = await Student.deleteOne({_id: id})
    console.log(studentToDelete)
}

const deleteMultipleData = async () => {
    const response = await Student.deleteMany({name: "Abhishek"})
    console.log(response)
}

// insertData()
// insertMultipleData()
// getData();
// updateData("63e3c3863f06442e64d7066b")
// updateDataDirectly("63e3c3863f06442e64d7066b")
// updateManyData()
// deleteData("63e3c3863f06442e64d7066b")
deleteMultipleData();

app.listen(5000, () => {
    console.log("Listening on port 5000")
})


//Comparison Operators
//eq => equal
//ne => not equal
//gt => greater than
//gte => greater than or equal to
//lt => less than
//lte => less than or equal to
//in => in operator
//nin => not in