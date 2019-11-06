require('dotenv').config()
var express = require('express');
var http = require('http').createServer(app);
var session = require("express-session");
const cors = require('cors');
var io = require('socket.io')(http);
var axios = require('axios');


var PORT = process.env.PORT || 3002;

var app = express();
//routing 

var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use('/',allRoutes);






const server = db.sequelize.sync({ force:false}).then(function() {
  http.listen(PORT, function(){
    console.log('listening on *:3002');
  });

  io.on('connection', function(socket){

    console.log('a user connected');

    socket.on('chat message', function(message){
    //  const {message, user, topic } = message
      db.GeneralTopic.create({
            message: message.message,
            user: message.user,
            topic: message.topic        
    }).then(function(SavedMessage){
       console.log("yayayayay")
    }).catch(function(err){
      console.log("this is the error.... ", err)
    })

        //this is where we will add messages to database;
  
      console.log('message: ', JSON.stringify(message));
      console.log('message from: ', message.from,)
    
          io.emit('chat message', message);

    });
    socket.on('chatroom enter', function(chatroom){
      io.emit('chatroom enter', chatroom)
    })
  });
});

app.listen(3003, function(){
  console.log('listening on *:3002');
});