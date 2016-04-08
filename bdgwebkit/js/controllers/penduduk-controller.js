app.controller('PendudukCtrl', function($http, $rootScope, $scope, $state, KelahiranService, InstansiKesehatanService) {
    $rootScope.$broadcast('pageTitle', 'Beranda');

    $scope.daftarKelahiran = [];
    $scope.daftarInstansiKesehatan = [];
    $scope.viewedDetail = {};
    $scope.showDetailedPermohonan = false;

    $scope.permohonan = {
        "anak": {
            "nama": null,
            "jenisKelamin": "laki-laki",
            "kotaLahirId": 4,
            "waktuLahir": null,
            "jenisLahir": null,
            "anakKe": 1,
            "penolongKelahiran": null,
            "berat": 0,
            "panjang": 0
        },
        "kartuKeluargaId": null,
        "aktaNikahId": null,
        "ibuId": null,
        "ayahId": null,
        "instansiKesehatanId": null,
        "saksiSatu": {
            "pendudukId": null,
            "email": null
        },
        "saksiDua": {
            "pendudukId": null,
            "email": null
        },
        "pemohonId": null,
        "waktuCetakTerakhir": null
    };

    var viewDetail = function(permohonan) {
        if (permohonan) {
            $scope.viewedDetail = permohonan;
            $scope.showDetailedPermohonan = true;
        } else {
            $scope.viewedDetail = {};
            $scope.showDetailedPermohonan = false;
        }
    }

    var getAllKelahiran = function(start, limit) {
        KelahiranService.getAllKelahiran(start, limit).then(function(response) {
            $scope.daftarKelahiran = response.data;
            $scope.daftarKelahiran.map(function(d) {
                d.anak.waktuLahir = (new Date(d.anak.waktuLahir)).toLocaleString();
            });
        });
    }

    var addKelahiran = function(permohonan) {
		KelahiranService.addKelahiran(permohonan).then(
			function(res) {
				$state.go('penduduk');
			}
		);
    }

    var deleteKelahiran = function(id, nama) {
        if (confirm('Apakah Anda yakin menghapus permohonan kelahiran ' + nama + '?')) {
            KelahiranService.deleteKelahiran(id).then(function(response) {
                getAllKelahiran();
            });
        }
    }

    var getAllInstansiKesehatan = function() {
        InstansiKesehatanService.getAllInstansiKesehatan().then(function(response) {
            $scope.daftarInstansiKesehatan = response.data;
        });
    }

    $scope.viewDetail = viewDetail;
    $scope.deleteKelahiran = deleteKelahiran;

    getAllKelahiran();
    getAllInstansiKesehatan();
});
