// 0. import hte mongoose library
const mongoose = require("mongoose")
const express = require("express");
const app = express();

// specify the port that your server will run on
const HTTP_PORT = process.env.PORT || 8083;
// import the Schema class
const Schema = mongoose.Schema;

// url of your database
const mongoURL = "mongodb+srv://Person:Portcredit1@cluster0.plb1r.mongodb.net/Luck?retryWrites=true&w=majority"

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

 
// Create scehme for table
// Define the table
const ItemsSchema = new Schema({
    name:String,
    rarity:String,
    description:String,
    goldPerTurn:Number
 })
 
 // Create the table and return the schema as a Mongoose model
 const Items = mongoose.model("items_table", ItemsSchema)

// Endpoints
/*
const s3 = new Items({"name": "Kelly", "rarity": "common", "description": "LOL", "goldPerTurn":4})
const s2 = new Items({"name": "Belly", "rarity": "zommon", "description": "LOL1", "goldPerTurn":0})
s3.save()
s2.save()
*/

/* GET ALL
   Endpoint: /api/items
   Request Type:  GET
   Return: JSON Array of all items in database
*/


/*
    Items.find().exec().then(
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
        }
    ).catch(
        (error) => {
            console.log("Error")
        }
    ) 

*/

/* GET ONE 
   Endpoint: /api/items:item_name
   Request Type:  GET
   Return: JSON Array of item with specific name
*/

/*
    Items.find({name:"Belly"}).exec().then(
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
        }
    ).catch(
        (error) => {
            console.log("Error")
        }
    ) 
*/

/* INSERT ONE
   Endpoint: /api/items
   Request Type:  POST
   Return: Insert item, item name and rarity must. Description and gold per turn optional
*/


 
/*
const s01 = new Items({"name": "Bob", "rarity": "common", "description": "POL", "goldPerTurn":1})
s01.save().then(
    console.log("Inserted")
).catch(
    (error) => {
        console.log("error")
        console.log(error)
    }
)
 */ 

/* DELETE AN ITEM BY NAME
   Endpoint: /api/items:item_name
   Request Type:  DELETE
   Return: Delete an item by name
*/

/*
Items.deleteOne({name: "Bob"}).exec().then(
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

*/

/*  UPDATE BY ID
   Endpoint: /api/items:item_id
   Request Type:  PUT
   Return: Error code 404
*/

/*

*/

   



