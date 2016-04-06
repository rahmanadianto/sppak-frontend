app.controller('kelurahanCtrl', function($scope, $rootScope, KelurahanService, authService, authDefaults) {
	
	$scope.verifikasiKelurahan = function(idKelahiran) {
		KelurahanService.verifikasiLurah(idKelahiran).then(
			function(res) {
				window.location.replace('/kelurahan-page.html');
			});
	};
});