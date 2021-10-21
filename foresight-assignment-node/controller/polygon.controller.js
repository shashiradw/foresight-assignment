const mongoose = require('mongoose');
const Polygon= mongoose.model('Polygon');
const axios = require('axios');
const url = require('url');
require("../models/nootification.model");
require("../models/user.model");
const User=mongoose.model('User');
const Notification= mongoose.model('Notification');
const saveNotification= require('../controller/notification.controller')

// module.exports.getPolygons=async (name)=>{

//     // const queryObject = url.parse(req.url,true).query;
//     const query  = Polygon.where({ name: name });
//     const poly = await query.findOne();

//     return JSON.stringify(poly.polygons);
    
//     //return res.send(JSON.stringify(poly.polygons));
// }

async function getPolygons(name){

    // const queryObject = url.parse(req.url,true).query;
    const query  = User.where({ name: name });
    var poly;

    try {
        ////Get all polygon List
        poly = await query.findOne();

    } catch (err) {
       console.log(err);
    }

    return JSON.stringify(poly.polygons);
    
    //return res.send(JSON.stringify(poly.polygons));
}

module.exports.addPolygon=async (req,res,next)=>{

    const queryObject = url.parse(req.url,true).query;
    const username=queryObject.name;

   // console.log("data=== ",req.body[0]);

    //Get polygon id list from database
    const query  = User.where({ name: username});
    const user = await query.findOne();

    //console.log(user.polygons.length);

    var polygonData;

    if(user.polygons.length == 0){
        //No any polygons contains
         polygonData={
            "point":{ 
                "x":req.body[0],
                "y":req.body[1]
            },
            "polygons" : [],
        }
    }else{

        const query2  = Polygon.where({ '_id': { $in: user.polygons}});
        polyList = await query2.find();

        //console.log("poly list",polyList[0].coordinates[0]);

         polygonData={
            "point":{ 
                "x":req.body[0],
                "y":req.body[1]
            },
            "polygons" : polyList,
        }
    }

    //new adding polygon
    var polygon;

//send request to java server
   await axios.post('http://localhost:8080/addpolygon',polygonData)
    .then(function (response) {

        responsePolygon =response.data;
        var savedPolygon;

        polygon=new Polygon();
        polygon.polygonType=responsePolygon.polygonType;
        polygon.coordinates=responsePolygon.coordinates;
        polygon.overlapped=responsePolygon.overlapped;


        console.log("polygon obj",polygon );

    })
     .catch(function (error) {
         console.log(error);
    });


    
    await polygon.save();

    //add to the users table
    user.polygons.push(polygon);
    await user.save();

    var notification
    //check notification
    if(polygon['overlapped']){
        console.log(polygon);

        //Created the notification
        notification=new Notification();
        notification.message="Overlapping...";
        await notification.save();


        //add to the users table
        user.notification.push(notification);
        await user.save();
    }

    return res.send(JSON.stringify({
        "polygon":polygon,
        "notification":notification,
    }));

}






