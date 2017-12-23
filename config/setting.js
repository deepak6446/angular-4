const elasticsearch=require('elasticsearch');
const User = require('../models/users.js')

console.log('>>>>>>>>> Server Running in ' + process.env.NODE_ENV + ' Environment(Mode) <<<<<<<<<<<<');

const expo  = {}
expo["algorithm"] = 'aes-256-ctr', expo["password"] = 'foodappsjdjsdvvkjjjoksdfcjksdf'; //algorithm and password for encryption

expo["client"] = new elasticsearch.Client( {  
  hosts: [
    'localhost:9200/'
  ]
});

//create user admin on startup
user = new User({username: "admin", password: '1b86b11a61af8dd5'/*'admin123'*/})
user.save(function(e,d){
	if(d) console.log('Admin account created')
	else if(e&&e.code===11000) console.log('Admin account present')
})

module.exports = expo 



