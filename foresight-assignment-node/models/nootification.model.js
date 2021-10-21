const mongoose = require('mongoose');


var notificationSchema= new mongoose.Schema(
    {
        message:{
            type:String,
            required: 'Message cannot be empty',
        },
    }
);

module.exports=mongoose.model('Notification', notificationSchema);
