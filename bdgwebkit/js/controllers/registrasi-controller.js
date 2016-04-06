app.controller('registrasiCtrl', function($scope, $rootScope, PendudukService) {
	
	$scope.pengguna = {
		"email": null,
		"password": null,
		"userable_id": null,
		"userable_type": null
	}

	$scope.registrasiPenduduk = function(pengguna) {
		PendudukService.registrasiPenduduk(pengguna).then(
			function(res) {
				console.log(res);
			});
	};
});