const express 			= require('express');
const router 			= express.Router();
const path 				= require('path');
const processRequest 	= require('./processRequest') 


/* GET home page. */

router.post('/login', processRequest.login)
router.get('/user/session', processRequest.session)

router.get('/*', (req, res, next) => {
	console.log("any")
    res.sendFile(path.resolve('dist/index.html'));
});
module.exports = router;
