console.log('Users Factory');
myApp.factory('UsersFactory', ['$http',function ($http) {
	var factory = {};

	factory.login = function(newUser, callback){
		console.log('factory info', newUser)
		$http.post('/login',newUser).then(function(returned_data){
			console.log("returned_data",returned_data.data);
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}			
		})
		.catch(function(err){
			console.log(err);
		});
	}
	return factory;
}])