const mongoose = require('mongoose');

var polygonSchema= new mongoose.Schema(
    {
        polygonType:{
            type: String
        },
        coordinates:{
            type:[
                {
                    x:{
                        type:Number,
                    },
                    y:{ 
                        type:Number
                    },
                }
            ]
        },
        overlapped:{
            type:Boolean,
        }
    });


//Map a model with a schema
module.exports=mongoose.model('Polygon', polygonSchema);