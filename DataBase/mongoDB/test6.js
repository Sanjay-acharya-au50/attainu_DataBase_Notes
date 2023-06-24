const mongoose = require("mongoose");
const express = require("express");
const app = express()

const { json } = require("express");

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/employee",
// {useNewUrlParser: true, useUnifieldTopology:true},
// {useNewUrlParser: true, useUnifiedTopology: true},

(err)=>{
    if(err){
        console.log("connection failed", err);
    }
    else{
        console.log("mongodb-connection successFull");
    }
}

);

let mySchema = new mongoose.Schema({
    name : String,
    employeeId : String,
    position : String,
    hasHealthInsurance : Boolean,
})

let Emp = new mongoose.model("data", mySchema);
let newEmp = new Emp({ name : "randomName",
    employeeId : "randomName@gmail.com",
    position : "HR",
    hasHealthInsurance : true,})
    // newEmp.save();

// -------------------

const myFind = async () =>{
    const foo = await Emp.find();
    console.log(foo);
    
}
myFind()



    app.listen(5000,()=>{
        console.log("port 5000 loading");
    })



// -------------------
// q2


       // function getData(){
    //     fetch("mongodb://localhost:27017/employees")
    //     .then(data=>data.json())
    //     .then(value=>{
    //         console.log(value);
    //     })
    // }
    // getData();

    // app.get("/", (req,res)=>{
    //     fetch("mongodb://localhost:27017/employees")
    //         .then(data=>data.json())
    //         .then(value=>{
    //             console.log(value);
    //         })
    //         res.send("hello")
    // })

    // fetch("mongodb://localhost:27017/employees")
    // .then((Response)=> {
    //     return Response.json()})
    //     .then((data)=>{
    //         // var d = data[0].at
    //         console.log(data)
    //     })

// -------------------


    // const baseUrl = "http://localhost:5000"; // Base URL of the API

    // Get all employees
    // async function getAllEmployees() {
    //   const response = await fetch("http://localhost:5000/employees");
    //   const employees = await response.json();
    //   console.log(employees);
    // }
    // getAllEmployees();
    
    // Get a single employee by id
    // async function getEmployeeById(id) {
    //   const response = await fetch(`${baseUrl}/employees/${id}`);
    //   const employee = await response.json();
    //   return employee;
    // }
    
    // Add a new employee
    // async function addEmployee(employee) {
    //   const response = await fetch(`${baseUrl}/employees`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(employee),
    //   });
    //   const newEmployee = await response.json();
    //   return newEmployee;
    // }
    
    // Update an existing employee by id
    // async function updateEmployee(id, employee) {
    //   const response = await fetch(`${baseUrl}/employees/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(employee),
    //   });
    //   const updatedEmployee = await response.json();
    //   return updatedEmployee;
    // }
    
    // Delete an employee by id
    // async function deleteEmployee(id) {
    //   const response = await fetch(`${baseUrl}/employees/${id}`, {
    //     method: "DELETE",
    //   });
    //   const deletedEmployee = await response.json();
    //   return deletedEmployee;
    // }
    
    // Usage examples
    
    // Get all employees
    // getAllEmployees().then((employees) => console.log(employees));
    
    // Get an employee by id
    // getEmployeeById(1).then((employee) => console.log(employee));
    
    // Add a new employee
    // const newEmployee = { name: "John Doe", email: "johndoe@example.com", phone: "555-1234" };
    // addEmployee(newEmployee).then((employee) => console.log(employee));
    
    // Update an existing employee
    // const updatedEmployee = { name: "Jane Doe", email: "janedoe@example.com", phone: "555-5678" };
    // updateEmployee(1, updatedEmployee).then((employee) => console.log(employee));
    
    // Delete an employee
    // deleteEmployee(1).then((employee) => console.log(employee));
    