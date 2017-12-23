var User = require('../models/users.js')

console.log('>>>>>>>>> Server Running in ' + process.env.NODE_ENV + ' Environment(Mode) <<<<<<<<<<<<');

//create user admin on startup
user = new User({username: "admin", password: '1b86b11a61af8dd5'/*'admin123'*/})
user.save(function(e,d){
	if(d) console.log('Admin account created')
	else if(e&&e.code===11000) console.log('Admin account present')
})



