const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
require("../models/polygon.model");
require("../models/nootification.model");

const Polygon= mongoose.model('Polygon');
const Notification= mongoose.model('Notification');

var userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required: 'Name cannot be empty',
            unique: true,
        },
        password:{
            type:String,
            required: 'Password cannot be empty',
            minlength: [4, 'Password must be atleast 4 character long']
        },
        saltSecret: String,
        polygons:[
                {
                    type: mongoose.Schema.ObjectId,
                    ref: Polygon,
                }
        ],
        notification:[
            {
                type: mongoose.Schema.ObjectId,
                ref: Notification,
            }
        ]
    }
);


userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err,salt) =>{
        bcrypt.hash(this.password, salt, (err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    }
    )
});


//Map a model with a schema
module.exports=mongoose.model('User', userSchema);