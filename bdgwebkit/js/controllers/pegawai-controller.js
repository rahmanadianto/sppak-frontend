app.controller('PegawaiCtrl', function($http, $interval, $rootScope, $scope, $state, KelahiranService, PendudukService, PegawaiService) {
	$rootScope.$broadcast('pageTitle', 'Daftar Permohonan');

	$scope.filter = {
		namaPemohon: '',
		namaAnak: '',
		namaInKes: '',
		namaKelurahan: ''
	};

	$scope.options = {
			selected: undefined,
			selectedTitle: 'Semua',
			options: [
				{ name: 'Semua', value: undefined },
				{ name: 'Belum Diajukan', value: 0 },
				{ name: 'Sudah Diajukan', value: 1 },
				{ name: 'Sudah Diverifikasi', value: 2 },
				{ name: 'Ditolak', value: 3 },
			]
	}

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
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	var tolak = function(idKelahiran) {
		PegawaiService.tolak(idKelahiran)
		.then(function(res) {
			getAllKelahiran();
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	var getAllKelahiran = function(start, limit) {
		KelahiranService.getAllKelahiran(start, limit)
		.then(function(response) {
			$scope.daftarKelahiran = response.data;
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	var cetak = function(kelahiran) {
		KelahiranService.editKelahiran(kelahiran.id, {waktuCetakTerakhir: new Date()});
		KelahiranService.cetak(kelahiran)
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	$scope.viewDetail = viewDetail;
	$scope.verifikasi = verifikasi;
	$scope.tolak = tolak;
	$scope.cetak = cetak;

	getAllKelahiran();
});
