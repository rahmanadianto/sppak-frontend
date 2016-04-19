app.controller('PendudukPermohonanCtrl', function($http, $rootScope, $scope, $state, $stateParams,
PendudukService, KotaService, KelahiranService, InstansiKesehatanService) {
    $rootScope.$broadcast('pageTitle', 'Pengajuan Permohonan');

    $scope.daftarInstansiKesehatan = [];
    $scope.daftarKota = [];
    $scope.ayah = {};
    $scope.ibu = {};

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
            res.data.saksiSatu = {
                pendudukId: (res.data.saksi_satu ? res.data.saksi_satu.pendudukId : null),
                email: res.data.saksi_satu ? res.data.saksi_satu.email : null
            };
            res.data.saksiDua = {
                pendudukId: res.data.saksi_dua ? res.data.saksi_dua.pendudukId : null,
                email: res.data.saksi_dua ? res.data.saksi_dua.email : null
            };

            if (res.data.ayahId) getAyah(res.data.ayahId);
            if (res.data.ibuId) getIbu(res.data.ibuId);

            $scope.permohonan = res.data;
        });
    }

    var addKelahiran = function(permohonan, isSubmit) {
        if (isSubmit) permohonan.status = 1;

        KelahiranService.addKelahiran(permohonan).then(
            function(res) {
                $state.go('penduduk', {}, {reload: true, inherit: true, notify: true});
            }
        );
    }

    var editKelahiran = function(permohonan, isSubmit) {
        if (isSubmit) permohonan.status = 1;

        KelahiranService.editKelahiran(permohonan.id, permohonan).then(
            function(res) {
                $state.go('penduduk', {}, {reload: true, inherit: true, notify: true});
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

    var getAyah = function(id) {
        if (id.length < 16) $scope.ayah = null;
        PendudukService.getPenduduk(id).then(function(res) {
              $scope.ayah = res.data;
        });
    }

    var getIbu = function(id) {
        if (id.length < 16) $scope.ibu = null;
        PendudukService.getPenduduk(id).then(function(res) {
              $scope.ibu = res.data;
        });
    }

    getAllInstansiKesehatan();
    getAllKota();

    $scope.getKelahiran = getKelahiran;
    $scope.addKelahiran = addKelahiran;
    $scope.editKelahiran = editKelahiran;
    $scope.deleteKelahiran = deleteKelahiran;

    $scope.getAyah = getAyah;
    $scope.getIbu = getIbu;
});
