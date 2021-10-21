const mongoose = require('mongoose');
const User= mongoose.model('User');
const session= require('express-session');
const bcrypt= require('bcryptjs');

//If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.
// Otherwise, the request will be left hanging.

module.exports.signIn=async (req,res,next)=>{
    var user= new User();
    user.name=req.body.username;
    user.password=req.body.password;

    //  req.session.isAuth=true;
    console.log("Signing ......" + req.session);

    // res.send('Hello ' + JSON.stringify(req.session));
    const query  = User.where({ name: user.name });
    const user1 = await query.findOne();
    console.log(user);

    if(!user1){
        res.send(JSON.stringify("false")); 
    }
    const isMatch = await bcrypt.compare(user.password, user1.password);
    if(!isMatch){
        res.send(JSON.stringify("false")); 
    }
    
    res.send(JSON.stringify(user));
}

module.exports.register=(req,res,next)=>{
    var user= new User();
    user.name=req.body.name;
    user.password=req.body.password;

    console.log("Registering......");


    //err: errors || doc : Newly saved document
    user.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
            if(err.code == 11000){
                res.sendStatus(422).send(['Username already exists '])
            }
            res.sendStatus(404);
        }
    })
}