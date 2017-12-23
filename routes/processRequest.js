const User 			= require('../models/users.js')
const setting 		= require('../config/setting')
const Q 			= require('q')
const crypto 		= require('crypto');
const elasticsearch	= require('elasticsearch');

const algorithm 	= setting.algorithm, 
	  password 		= setting.password,
	  client		= setting.client 	

module.exports 	= {

	login: async (req, res) => {
	    
	    console.log("<<<<<<<<<<<<< in login : ", req.body)
	    var ip = req.ip;
	    ip = ip.split('::ffff:');
	    (ip.length>1) ? (ip = ip[1]) : ( ip = ip[0]);

	    var username = req.body.username || '';
	    var password = req.body.password || '';

	    if (username == '' || password == '') {
	        res.json({
	            "status": false,
	            "message": "Invalid credentials"
	        });
	        return;
	    }

	    var dbUserObj = await module.exports.validate(username, password)
	    
        console.log("in auth.validate", dbUserObj)

        if (!dbUserObj) { // If authentication fails, we send a 401 back
            
            res.json({
                "status": false,
                "message": "Invalid credentials!"
            });

        }else {

            try {
                req.session.username = dbUserObj.username;
                res.json(dbUserObj);
                res.end();                    
            }catch (e) {
                console.log("err in login", e)
                res.json({
                    "status": false,
                    "message": "Error login please try again"
                });
            }

        }

	},

	validate: (username, password) => {
	    var deferred = Q.defer();
	    try{
	        User.findOne({username: username}, (err, doc) => {
	            if (err) reject(err);
	            else {
	                if (!doc)
	                    return deferred.resolve(false);
	                console.log("----------->", doc, decrypt(doc.password), password)
	                if (decrypt(doc.password) !== password)
	                    deferred.resolve(false);
	                else {
	                    user_sessions[doc.username] = {
	                        username: doc.username,
	                        password: doc.password
	                    }

	                    deferred.resolve({
	                        status: true, 
	                        username: doc.username,
	                    });
	                }
	            }
	        })
	    }catch (e) {
	        console.log('Raise exception: '+e)
	        return deferred.resolve(false);
	    }
	    return deferred.promise;
	},

	session: (req, res) => {
	    console.log('-seession-----------------')
	    var username = req.session.username || req.body.username;
	    status = {status: username ? true : false, userInfo: {username:req.session.username}}
	    console.log("--------------__________>session", status)
	    res.json(status);
	    res.end();

	},

	searchRecipe : (req, res) => {
	    // var username = req.session.username || req.body.username;
	   	
	   	client.cluster.health({}, (err,resp,status) => {  
	   	  if ( status == 200) {
	    	console.log('-seession-----------------', req.body)
	   	  	
	   	  	//Create or update a document. 
	   	  	client.index({
	   	  	  
	   	  	  index: 'searchindex',
	   	  	  type: 'searchStrings',
	   	  	  body: {
	   	  	  	term: req.body.srch,
	   	  	    title: req.body.srch,
	   	  	    // tags: ['y', 'z'],
	   	  	    published: true,
	   	  	  }
	   	  	  

	   	  	}, (error, response) => {
	   	  		
			    res.json({status: true});
			    res.end();
	   	  		console.log("create.index", error, response)

	   	  	});
	   	  }else {
	   	  	res.json({status: false});
	   	  	res.end();
	   	  }
	   	});


	},

	searchChange : (req, res) => {
	    // var username = req.session.username || req.body.username;
	   	
	   	client.cluster.health({}, (err,resp,status) => {  
	   	  if ( status == 200) {
	    	console.log('-searchChange-----------------', req.body.srch)
	   	  	
	   	  	client.msearch({
	   	  	  body: [
	   	  	    // query_string query, on index/mytype
	   	  	    { index: 'searchindex', type: 'searchStrings' },
	   	  	    { query: { match: { body : req.body.srch} } }
	   	  	  ]
	   	  	},  (error, response) => {
	   	  		
			    res.json({status: true});
			    res.end();
	   	  		console.log("create.search", error, JSON.stringify(response))

	   	  	});
	   	  }else {
	   	  	res.json({status: false});
	   	  	res.end();
	   	  }
	   	});


	}

}

//delete all 
// client.indices.delete({
//     index: '_all'
// }, function (error, response) {
//   console.log("---------------sdfdf-----.>msearch of doc:", error)
// });
// client.msearch({body: [{},
// 	   	  	      { query: { match_all: {} } },

// 	   	  	      // query_string query, on index/mytype
// 	   	  	      // { index: 'myindex', type: 'mytype' },
// 	   	  	      // { query: { query_string: { query: '"Test 2"' } } }
// 	   	  	    ]
// 	   	  	  }, function (error, response) {
// 	   	  	    console.log("--------------------.>msearch of doc:", error,  JSON.stringify(response.responses[0].hits.hits))
// 	   	  	  });

validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(email);
}

encrypt = (text) => {
	if (!text||!text.length) return '';
  	var cipher = crypto.createCipher(algorithm,password)
  	var crypted = cipher.update(text,'utf8','hex')
  	crypted += cipher.final('hex');
  
  	return crypted;
}


decrypt = (text) => {
	console.log("encrypt", encrypt(''))
  	if (!text||!text.length) return '';
  	try {
		
		var decipher = crypto.createDecipher(algorithm,password)
	  	var dec = decipher.update(text,'hex','utf8')
	  	dec += decipher.final('utf8');

  	}catch (e) {
    	console.log("err in decrypt", e)
  	}

  	return dec;
}