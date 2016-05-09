app.controller('InstansiKesehatanCtrl', function($scope, $rootScope, KelahiranService, InstansiKesehatanService) {
	$rootScope.$broadcast('pageTitle', 'Daftar Permintaan Verifikasi');

	$scope.filter = {
		namaIbu: '',
		namaAyah: '',
		namaAnak: '',
		namaKelurahan: '',
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
		InstansiKesehatanService.verifikasi(idKelahiran)
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
	};

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

	$scope.verifikasi = verifikasi;
	$scope.viewDetail = viewDetail;

	getAllKelahiran();
});
