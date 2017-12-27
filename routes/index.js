const express 			= require('express');
const router 			= express.Router();
const path 				= require('path');
const processRequest 	= require('./processRequest') 


/* GET home page. */

router.post('/login', processRequest.login)
router.get('/api/logout', processRequest.logout)
router.get('/user/session', processRequest.session)
router.post('/api/searchRecipe', processRequest.searchRecipe)
router.post('/api/searchChange', processRequest.searchChange)

router.get('/*', (req, res, next) => {
	console.log("any")
    res.sendFile(path.resolve('dist/index.html'));
});
module.exports = router;
