app
.controller('AdminCtrl', function($scope, $http) {
	$scope.response = [];
	$scope.viewedDetail = {};
	
    $http({
        url: "http://localhost:8000/api/v1/kelahiran",
        dataType: "json",
        method: "GET",
        data: "",
        withCredentials: true,
        headers: {
			"Authorization": "Basic bmF0YW5lbGlhN0BnbWFpbC5jb206cmFoYXNpYQ=="
		}
    }).then(function(response) {
        $scope.response = response.data.data;
    }, function(error) {
        $scope.error = error.data;
    });
    
    
    $scope.viewDetail = function(permohonan) {
		$scope.viewedDetail = permohonan;
	}
	
	$(document).ready(function() {
		$('#tabel-permohonan tbody').on('click', 'tr', function() {
			var data = $('#tabel-permohonan').DataTable().row(this).data();
			angular.element('body').scope().viewDetail(data);
			angular.element('body').scope().$apply();
		});
	});

});
