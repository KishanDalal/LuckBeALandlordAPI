// import express
const express = require("express");
const app = express();
 
// specify the port that your server will run on
const HTTP_PORT = process.env.PORT || 8080;
 
// list of url endpoints that your server will respond to
app.get("/", (req, res) => {
 res.send("Hello World!");
});
 
// start the server and output a message if the server started successfully
const onHttpStart = () => {
 console.log(`Server has started and is listening on port ${HTTP_PORT}`)
}
app.listen(HTTP_PORT, onHttpStart);

// https://localhost:8080/
app.get("/", (req, res) => {
    res.send("Welcome to the discord.com homepage!");
   });
   // https://localhost:8080/why-discord
   app.get("/why-discord", (req, res) => {
    res.send("Discord gives you the power to create your own place to belong. Your Discord server is your home, shared with only the special people you invite.");
   });
   // https://localhost:8080/nitro
   app.get("/nitro", (req, res) => {
    res.send("Get an enhanced Discord experience for one low monthly cost. Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.")
   })
   // https://localhost:8080/safety/four-steps-to-a-safe-account
   app.get("/safety/four-steps-to-a-safe-account", (req, res) => {
    res.send("To secure your account, choose a strong password!")
   })
   
   // configure express to accept data from the client as JSON format
app.use(express.json())

// example:  overriding the default express error code
res.status(418).send({"name":"Peter", "age":99});