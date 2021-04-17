// 0. import hte mongoose library
const mongoose = require("mongoose")
const express = require("express");
const app = express();

// specify the port that your server will run on
const HTTP_PORT = process.env.PORT || 8081;

 
// import the Schema class
const Schema = mongoose.Schema;

// 1. connect to your mongo database
// -confirm that connection succuessed


// url of your database
const mongoURL = "mongodb+srv://Person:Portcredit1@cluster0.plb1r.mongodb.net/college?retryWrites=true&w=majority"

// configuration options to use when connecting to the database
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true}

// connect to the database and check that it worked
mongoose.connect(mongoURL, connectionOptions).then(

    () =>
    {
        console.log("Connected successfully to the database")
    }
).catch(

    (err) =>
    {
        console.log("Error connecting to database")
        console.log(err)
    }
)

/// START SERVER
// start the server and output a message if the server started successfully
const onHttpStart = () => {
    console.log(`Server has started and is listening on port ${HTTP_PORT}`)
   }
   app.listen(HTTP_PORT, onHttpStart);


// list of url endpoints that your server will respond to
app.get("/", (req, res) => {
    res.send("Hi");
   });


// 2. define the Student table
// Define the table, Table schemas 
const StudentSchema = new Schema({
    name:String,
 })
 
 // Create the table and return the schema as a Mongoose model
const Student = mongoose.model("students_table", StudentSchema)


/* Inserting 
// 3. insert data into the table
const s1 = new Student({"name": "Kelly"})
const s2 = new Student({"name": "Bob"})
const s3 = new Student({"name": "Kevin"})
const s4 = new Student({"name": "Caitlyn"})

// insert many students
Student.create([s1,s2,s3,s4]).then(
    () => 
    {
        console.log("Insert with create successful")
    }
).catch(
    (err) =>
    {
        console.log("Error inserting with create into table.")
        console.log(err)
    }
)
*/



// SEARCH
// student named Lurara:  {name:"Lurara"}
/*
Student.find({name:"Bobz"}).exec().then(
     // 1. database was able to find matching student 
    // 2. the database was NOT able to find the student
    (results) => 
    {
        if(results.length === 0)
        {
            console.log("No results found")
        }
        else
        {    
            console.log(results)
        }
    }).catch(
    (err) => {
        // IF problem with the query
        console.log(err) 
    }
)
*/

// UPDATE 
/*
Student.findOneAndUpdate({name:"Kevin"}, {name:"Emily"}, {new:true}).exec().then(
    (updatedStudent) =>
    {
        if(updatedStudent === null)
        {
            console.log("Could not find the student to update")
        }
        else
        {
         console.log(updatedStudent)
        }
    }
).catch(
    (err) => {
        console.log(err)
    }
)
*/

// Delete 
/*
// delete by id
Student.findByIdAndDelete("60652d5e5f2a591041d04bd2").exec().then(
    (deletedStudent) => 
    {
        if(deletedStudent == null)
        {
            console.log("Could not find a student to delete")
        }
        else
        {
            console.log(deletedStudent)
        }
    }
).catch(
    (err) => 
    {
        console.log(err)
    }
)

// delete all
Student.deleteMany({}).exec().then(
    (result) => 
    {
        console.log("Deleted all Data. Whoops.")
    }
).catch(
    (err) => 
    {
        console.log(err)
    }
)
*/