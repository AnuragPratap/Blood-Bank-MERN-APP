const express = require('express');
const { testController } = require('../controllers/testController');

// router object
const router=express.Router();

//routes

router.get('/',testController); 
 
// '/test' means it will give the route -> http://localhost:8080/test

// export
module.exports = router; 