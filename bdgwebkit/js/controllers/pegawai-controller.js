app.controller('PegawaiCtrl', function($http, $rootScope, $scope, $state, KelahiranService, PegawaiService) {
	$rootScope.$broadcast('pageTitle', 'Daftar Permohonan');

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
	}

	var tolak = function(idKelahiran) {
		PegawaiService.tolak(idKelahiran)
		.then(function(res) {
			getAllKelahiran();
		});
	}

	var getAllKelahiran = function(start, limit) {
		KelahiranService.getAllKelahiran(start, limit).then(function(response) {
			$scope.daftarKelahiran = response.data;
		});
	}

	$scope.viewDetail = viewDetail;
	$scope.verifikasi = verifikasi;
	$scope.tolak = tolak;

	getAllKelahiran();
});
