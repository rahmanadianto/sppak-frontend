app
.controller('AdminCtrl', function($http, $scope, authService, authDefaults) {
	$scope.response = [];
	$scope.viewedDetail = {};
    
    $scope.viewDetail = function(permohonan) {
		$scope.viewedDetail = permohonan;
	}
	
	$http({
        url: "http://localhost:8000/api/v1/kelahiran",
        dataType: "json",
        method: "GET",
        data: "",
        withCredentials: true,
        beforeSend: function(xhr){
			var auth = localStorage.getItem('ls.auth');
			xhr.setRequestHeader('Authorization', auth.substring(1,auth.length - 1));
		}
    }).then(function(response) {
        $scope.response = response.data.data;
    }, function(error) {
        $scope.error = error.data;
    });

});
