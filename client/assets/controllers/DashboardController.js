myApp.controller('DashboardController',['$scope','AppointmentFactory','UsersFactory','$location','$cookies',function ($scope,AppointmentFactory,UsersFactory,$location,$cookies) {
	$scope.user = $cookies.get('user_id');
	$scope.appoints = [];

	if(!$scope.user){
		$location.url('/')
	}
	var index = function () {
	  AppointmentFactory.index(function(data) {
	      console.log(data.appoint);
	      $scope.appoints = data.appoint;
	  })
	}
	index();
	$scope.delete = function(data){
    	AppointmentFactory.delete(data);
    	index();
  }

}])