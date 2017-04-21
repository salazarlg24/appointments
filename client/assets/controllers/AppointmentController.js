myApp.controller('AppointmentController',['$scope','UsersFactory','AppointmentFactory','$location','$cookies','$parse',function ($scope,UsersFactory,AppointmentFactory,$location,$cookies,$parse) {
	$scope.user = $cookies.get('user_id');
	$scope.appoints = [];
	$scope.date = new Date();
	$scope.messages = [];
	if(!$scope.user){
		$location.url('/')
	}

	var index = function () {
	  AppointmentFactory.index(function(data) {
	      console.log(data.appoint);
	      $scope.appoints = data.appoint;
	  })
	}
	index()
	$scope.create = function(){
		// var user;
		// for(var i =0; i < $scope.appoints.length;i++){
		// 	if($scope.appoints[i]._user._id == $scope.user){
		// 		user = $scope.appoints[i]._user;
		// 		console.log(user)
		// 	}
		// 	if(user.appoint.length >1){
		// 		$scope.newAppoint = {}
		// 		$scope.messages.push("Sorry you can only make 1 appointment.")
		// 		$location.url('/appointment')
		// 	}
		// }
		console.log('user id is', $scope.user)
		console.log($scope.newAppoint.date)
		if($scope.newAppoint.date <= $scope.date){
			$scope.newAppoint = {}
			$scope.messages.push("Please enter a future date. Thank you.")
			$location.url('/appointment')

		}
		// if($scope.newAppoint.time < "1970-01-01T08:00:00.000Z"){
		// 	$scope.newAppoint = {}
		// 	$scope.messages.push("Please enter a future date. Thank you.")
		// 	$location.url('/appointment')

		// }
		else{
			AppointmentFactory.create($scope.newAppoint,$scope.user, function(data){
				// if(data.errors){
				// 	if(typeof(data.errors) == 'object'){
				// 		angular.forEach(data.errors,function(v,k){
				// 			$scope.messages.push(data.errors[k].message)
				// 		})
				// 	}
				// 	else{
				// 	$scope.messages.push(data.errors);
				// 	}
				// }
				$scope.appoints = data;
				$scope.newAppoint = {};
				$location.url("/dashboard")
			})
		}
	}
}])
