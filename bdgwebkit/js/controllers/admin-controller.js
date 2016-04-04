app
.controller('AdminCtrl', function($scope, $http) {
    $http({
        url: "http://localhost:8000/api/v1/kelahiran",
        dataType: "json",
        method: "GET",
        data: "",
        headers: {
			"Authorization": "Basic bmF0YW5lbGlhN0BnbWFpbC5jb206cmFoYXNpYQ=="
		}
    }).then(function(response) {
        $scope.response = response.data;
    }, function(error) {
        $scope.error = error.data;
    });
});

