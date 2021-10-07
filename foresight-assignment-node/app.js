require('dotenv');
require('./models/db');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


//load env vars
dotenv.config({ path :'./config/config.env'});

const routingIndex=require('./route/index.router');

const app = express();

//Body parser
app.use(express.json());
//Enable cors
app.use(cors());

//Routing middleware
app.use('/api',routingIndex);




// app.get('/api/v1/stores',(req,res)=>{
//     res.send("hello gfgghfg fg");
// })
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>
    console.log(`Server running in ${process.env.NODE_ENV}`)
);