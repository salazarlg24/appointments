myApp.controller('UsersController',['$scope','UsersFactory','$location','$cookies',function ($scope,UsersFactory,$location,$cookies) {
	$scope.user = $cookies.get('user_id');
	$scope.messages = [];

    $scope.login = function(){
        UsersFactory.login($scope.user, function(data){
            if(data.errors){
                console.log(data);
                console.log(typeof(data.errors));
                if(typeof(data.errors) == "object"){
                    angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.errors[k].message);
                    })
                }
                else{
                    $scope.messages.push(data.errors);
                }
                $location.url("/");
            }
            else{
                $cookies.put("user_id", data._id);

                console.log($cookies.get("user_id"));
                $location.url("/dashboard");
            }
        })
    },
    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies,function(v,k){
            $cookies.remove(k);
        });
        console.log("User id", $cookies.get('user_id'));
        $location.url('/');
    }
}]);