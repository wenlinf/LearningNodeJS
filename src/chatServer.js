var express = require('express');
var bodyParser= require('body-parser');
var app = express();
app.listen(8000);
var tweets=[];
app.get('/',function(req,res){
    res.send('welcome to node twitter');
})
app.post('/send',bodyParser.json(),function(req,res){
    if(req.body&&req.body.tweet){
        tweets.push(req.body.tweet);
        res.send({status:"ok",message:"Tweet received"});
    }else{
        res.send({status:"nok",message:"no tweets received"});
    }
})
app.get('/tweets',function(req,res){
    res.send(tweets);
})
