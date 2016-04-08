app.controller('InstansiKesehatanCtrl', function($scope, $rootScope, KelahiranService, InstansiKesehatanService) {
	$rootScope.$broadcast('pageTitle', 'Beranda');

	var verifikasi = function(idKelahiran) {
		InstansiKesehatanService.verifikasi(idKelahiran)
		.then(function(res) {
			getAllKelahiran();
		});
	};

	var getAllKelahiran = function(start, limit) {
		KelahiranService.getAllKelahiran(start, limit).then(function(response) {
			$scope.daftarKelahiran = response.data;
			$scope.daftarKelahiran.map(function(d) {
				d.anak.waktuLahir = (new Date(d.anak.waktuLahir)).toLocaleString();
			});
		});
	}

	$scope.daftarKelahiran = [];
	$scope.verifikasi = verifikasi;

	getAllKelahiran();
});
