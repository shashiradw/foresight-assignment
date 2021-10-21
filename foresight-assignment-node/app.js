require('dotenv');
require('./models/db');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session= require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);



//load env vars
dotenv.config({ path :'./config/config.env'});

const routingIndex=require('./route/index.router');

const app = express();


//Body parser
app.use(express.json());
//Enable cors
app.use(cors());

const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: "sessions"
})


// Catch errors
store.on('error', function(error) {
    console.log(error);
  });

  
  app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
      expires: 600000 // 6 days
    },
    store: store,
    resave: false,
    saveUninitialized: false,

  }));

  


//Routing middleware
app.use('/api',routingIndex);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>
    console.log(`Server running in ${process.env.NODE_ENV}`)
);