var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {

	login: function(req,res){
		User.findOne({name:req.body.name}, function(err,user){
			if(err){
				res.json(err);
			}
			else if(!user){
				User.create(req.body,function(err,user){
				    if(err){
				        res.json(err);
				    }
				    else{
				        console.log('Created User!', user);
						res.json(user);
				    }	
				})
			}
			else{
				console.log('User logged in', user);
				res.json(user);
			}
		})
	},	
}