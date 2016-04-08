app.controller('PegawaiCtrl', function($http, $rootScope, $scope, $state, KelahiranService, PegawaiService) {
	$rootScope.$broadcast('pageTitle', 'Beranda');

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
		PegawaiService.verifikasi(idKelahiran)
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

	$scope.viewDetail = viewDetail;
	$scope.verifikasi = verifikasi;

	getAllKelahiran();
});
