const express = require('express');
const router = express.Router();
const path = require('path');


/* GET home page. */

router.get('/api/users', function (req, res, next) {
    res.json({status:0});
    res.end()
});

router.get('/*', function (req, res, next) {
	console.log("any")
    res.sendFile(path.resolve('/index.html'));
});
module.exports = router;
