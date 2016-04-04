app.controller('instansiKesehatanCtrl', function($scope, $rootScope, InstansiKesehatanService) {
	
	$scope.verifikasiInstansiKesehatan = function(idKelahiran) {
		InstansiKesehatanService.verifikasiInstansiKesehatan(idKelahiran).then(
			function(res) {
				console.log(res);
			});
	};
});