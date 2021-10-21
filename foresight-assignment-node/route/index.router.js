const express = require('express');
const router = express.Router();
const polygonController = require('../controller/polygon.controller');
const userController = require('../controller/user.controller');



//Get method for signup
router.post('/signin', userController.signIn);

router.post('/register', userController.register);

//Get Polygons
//  router.get('/polygons',polygonController.getPolygons);

//Add new Polygon
router.post('/polygon',polygonController.addPolygon);

//Router
module.exports=router;

