// 0. import hte mongoose library
const mongoose = require("mongoose")
const express = require("express");
const app = express();
app.use(express.json());

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


 
// Create scehme for table
// Define the table
const ItemsSchema = new Schema({
    name:{type: String, required: true},
    rarity:{type: String, required: true},
    description:String,
    goldPerTurn:Number
 })
 
 // Create the table and return the schema as a Mongoose model
 const Items = mongoose.model("items_table", ItemsSchema)


/* Insert Values 
const s3 = new Items({"name": "Magpie", "rarity": "common", "description": "Gives 9 gold per 4 spins", "goldPerTurn":-1})
const s2 = new Items({"name": "King Midas", "rarity": "Rare", "description": "Adds 1 Gold each turn. Adjacent Gold gives 3x more gold", "goldPerTurn":2})
const s5 = new Items({"name": "Goose", "rarity": "common", "description": "Has a 1% chance of adding a Golden Egg", "goldPerTurn":1})
const s6 = new Items({"name": "Bee", "rarity": "uncommon", "description": "Adjacent Flowers give 2x more gold", "goldPerTurn":1})
const s7 = new Items({"name": "Golden Egg", "rarity": "Rare", "description": "", "goldPerTurn":3})
const s8 = new Items({"name": "Void Stone", "rarity": "uncommon", "description": "Adjacent empty squares give 1 coin more. Destorys itself if adacent to 0 empty squares. Give 8 coins when destroyed", "goldPerTurn":0})
s3.save()
s2.save()
s5.save()
s6.save()
s7.save()
s8.save()
*/


// Status Codes

var msg500 = {
    statusCode: 500,
    msg: "Error when find value"

}

var msg201 = {
    statusCode: 201,
    msg: "Success"
}

var msg200 = 
{
    statusCode: 200,
    msg: "Ok, success"
}

var msg404 = 
{
    statusCode: 404,
    msg: "Not Found"
}

var msg501 =
{
    statusCode: 501,
    msg: "Not Implemented"
}


// Endpoints

/* GET ALL
   Endpoint: /api/items
   Request Type:  GET
   Return: JSON Array of all items in database
*/

app.get("/api/items", (req, res) =>
{
    Items.find().exec().then(
        (results) =>
        {
            if(results.length === 0)
            {
               
                res.status(500).send(msg500)
            }
            else
            {    
                res.send(results)
            }
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    ) 
})




/* GET ONE 
   Endpoint: /api/items:item_name
   Request Type:  GET
   Return: JSON Array of item with specific name
*/

app.get("/api/items/:item_name", (req, res) =>{

    Items.findOne({name:req.params.item_name}).exec().then(
        (results) =>
        {
            if(results.length === 0)
            {
                console.log("No results found")
            }
            else
            {    
               
                res.send(results)
                
            }
        }
    ).catch(
        (error) => {
            res.status(500).send(msg500)
        }
    )

})

/* INSERT ONE
   Endpoint: /api/items
   Request Type:  POST
   Return: Insert item, item name and rarity must. Description and gold per turn optional
*/


 
app.post("/api/items", (req, res) => { 
     console.log("Recevied from client")
     console.log(req.body)
   
   if(req.body.hasOwnProperty("name") === true || req.body.hasOwnProperty("rarity") === true)
   {
        Items.create(req.body).then(
            (result) =>  {
                console.log("Create success!")
                res.status(201).send(msg201)
            }
        ).catch(
            (err) => 
            {
                    res.status(500).send(msg500)
            }
        )
  }
  else
  {
    res.status(500).send("An internal error occured on the server side")
  }
})

/* DELETE AN ITEM BY NAME
   Endpoint: /api/items:item_name
   Request Type:  DELETE
   Return: Delete an item by name
*/

app.delete("/api/items/:item_name", (req, res) => {

    Items.deleteOne({name:req.params.item_name}).exec().then(
        (deletedStudent) => 
        {
            if(deletedStudent == null)
            {
                res.status(500).send("Name not found")
                
            }
            else
            {
                res.status(200).send("Successfully deleted")
            }
        }
    ).catch(
        (err) => 
        {
            res.status(500).send(msg500)
        }
    )
})



/*  UPDATE BY ID
   Endpoint: /api/items:item_id
   Request Type:  PUT
   Return: Error code 404
*/

app.put("/api/items/:item_id", (req, res) => 
    {
        res.status(501).send("The requested endpoint is currently not avaible, but my be implemented in the future")
    }
)

// Are out lost? 
app.use(function(req,res){
    res.status(404).send("Are you lost? Not found. ");
});


