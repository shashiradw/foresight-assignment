const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path :'./config/config.env'});


mongoose.connect(process.env.MONGO_URI, (err)=>{
    if(!err) {
        console.log("Connection sucess!");
    }else{
        console.log("Error in connecting DB : "+ JSON.stringify(err,undefined,2));
    }
})


require('./user.model');