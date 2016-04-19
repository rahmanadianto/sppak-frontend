app.controller('KelurahanCtrl', function($scope, $rootScope, KelurahanService, KelahiranService) {
	$rootScope.$broadcast('pageTitle', 'Daftar Permintaan Verifikasi');

	$scope.filter = {
		namaPemohon: '',
		namaAnak: '',
		namaInKes: '',
		verifikasi: '',
		verifikasiOptions: [
			{name: 'Semua', value: ''},
			{name: 'Belum Diverifikasi', value: false},
			{name: 'Terverifikasi', value: true},
		]
	};

	$scope.daftarKelahiran = [];
	$scope.viewedDetail = {};
	$scope.showDetailedPermohonan = false;

    var viewDetail = function(permohonan) {
		if (permohonan) {
			$scope.viewedDetail = permohonan;
			$scope.showDetailedPermohonan = true;
		} else {
			$scope.viewedDetail = {};
			$scope.showDetailedPermohonan = false;
		}
	}

	var verifikasi = function(idKelahiran) {
		KelurahanService.verifikasi(idKelahiran)
		.then(function(res) {
			getAllKelahiran();
		});
	};

	var getAllKelahiran = function(start, limit) {
		KelahiranService.getAllKelahiran(start, limit).then(function(response) {
			$scope.daftarKelahiran = response.data;
		});
	}

	$scope.verifikasi = verifikasi;
	$scope.viewDetail = viewDetail;

	getAllKelahiran();
});
