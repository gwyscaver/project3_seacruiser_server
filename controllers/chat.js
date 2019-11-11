var express = require("express");
var router = express.Router();
var db = require('../models');
const bcrypt = require('bcrypt');

router.get('/PersonalTopics', function(req, res){
    //find a PersonlTopic that a given user is assos with
        db.PersonalTopic.findAll({
            where: {
                UserId: req.body.name
        }
    }).then(function(PersonalTopics){
        res.send({PersonalTopics})
    })
        //find messages within that personal Topic
            //send those messages back in an array
})
//-----TO ASK TOMORROW, chain them together and send as one object?----------------

router.get('/allchannels/:topic',function(req,res){
console.log("THIS IS PARAM: ", req.params.topic)
    db.GeneralTopic.findAll({

        where:{

            topic: req.params.topic

        }
    }).then(function(messages){
        res.json(messages)
    }).catch(function(err){
        res.json(err);
    })
})

router.get('/Messages',function(req,res){
    db.DirectMessage.findAll({

        where:{
            UserId: req.body.name

        }
    }).then(function(DirectMessages){
        res.send(DirectMessages)
    })
})

router.get('/Users',function(req,res){
    db.User.findAll({}).then(function(AllUsers){
        res.json(AllUsers)
    }).catch(function(err){
        res.json(err)
    })
})

router.post('/PersonalChannels',function(req,res){
    db.PersonalTopic.create({
        id1: req.body.userId,
        id2: req.body.friendId,
        name1: req.body.userName,
        name2: req.body.friendName
    }).then(function(newDmChannel){
        res.json(newDmChannel)
    })
})

// router.post('/GeneralTopics',function(req,res){
//     console.log(req.body)
//     res.json(req.body)
//     // db.GeneralTopic.create({

//     //     where:{
//     //         message: req.body.message,
//     //         user: req.body.name,
//     //         topic: req.body.topic

//     //     }
//     // }).then(function(SavedMessage){
//     //     res.send(SavedMessage)
//     // })
// })

module.exports = router;