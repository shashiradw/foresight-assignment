const mongoose = require('mongoose');
const Notification= mongoose.model('Notification');
//add new Notifications


async function addNotification(message){

    console.log("Adding notification.........");

    //Created the notification
    const notification=new Notification();
    notification.message=message;

    await notification.save();


}

module.exports= addNotification;
