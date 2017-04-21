console.log('Appoint Factory');
myApp.factory('AppointmentFactory',['$http',function ($http) {
	var factory = {}
	factory.index = function(callback){
		$http.get('/appointment').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.create = function(newAppoint,user_id,callback){
		$http.post('/appointment/'+user_id, newAppoint).then(function(returned_data){
			if(typeof(callback)=='function'){
				console.log('returned_data',returned_data.data)
				callback(returned_data.data);
			}
		})
	}
	factory.delete = function(data,callback){
		$http.delete('/appointment/'+data).then(function(returned_data){
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}
		})
	}

	return factory;
}])