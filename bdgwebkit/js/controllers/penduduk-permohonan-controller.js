app.controller('PendudukPermohonanCtrl', function($http, $rootScope, $scope, $state, $stateParams, KotaService, KelahiranService, InstansiKesehatanService) {
    $rootScope.$broadcast('pageTitle', 'Pengajuan Permohonan');

    $scope.daftarInstansiKesehatan = [];
    $scope.daftarKota = [];

    $scope.permohonan = {
        "id": null,
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

    var getAllInstansiKesehatan = function() {
        InstansiKesehatanService.getAllInstansiKesehatan().then(function(response) {
            $scope.daftarInstansiKesehatan = response.data;
        });
    }

    var getAllKota = function() {
        KotaService.getAllKota().then(function(response) {
            $scope.daftarKota = response.data;
        });
    }

    var getKelahiran = function(id) {
        KelahiranService.getKelahiran(id).then(function(res) {
            $scope.permohonan = res.data;
            console.log($scope.permohonan);
        });
    }

    var addKelahiran = function(permohonan) {
        KelahiranService.addKelahiran(permohonan).then(
            function(res) {
                $state.go('penduduk');
            }
        );
    }

    var editKelahiran = function(permohonan) {
        KelahiranService.editKelahiran(permohonan.id, permohonan).then(
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

    getAllInstansiKesehatan();
    getAllKota();

    $scope.addKelahiran = addKelahiran;
    $scope.editKelahiran = editKelahiran;
    $scope.deleteKelahiran = deleteKelahiran;
});