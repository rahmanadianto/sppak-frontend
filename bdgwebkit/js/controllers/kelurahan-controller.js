app.controller('kelurahanCtrl', function($scope, $rootScope, InstansiKesehatanService) {
	
	$scope.verifikasiKelurahan = function(idKelahiran) {
		KelurahanService.verifikasiLurah(idKelahiran).then(
			function(res) {
				console.log(res);
			});
	};
});