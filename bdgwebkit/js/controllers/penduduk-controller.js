app.controller('PendudukCtrl', function($anchorScroll, $location, $http, $rootScope, $scope, $state, KotaService, KelahiranService, InstansiKesehatanService) {
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

    var getAllKelahiran = function(start, limit) {
        KelahiranService.getAllKelahiran(start, limit).then(function(response) {
            $scope.daftarKelahiran = response.data;
        });
    }

    var goToEditKelahiran = function(permohonan) {
        $state.go('penduduk.permohonan.update', {id: permohonan.id});
    }

    var deleteKelahiran = function(id, nama) {
        if (confirm('Apakah Anda yakin menghapus permohonan kelahiran ' + nama + '?')) {
            KelahiranService.deleteKelahiran(id).then(function(response) {
                getAllKelahiran();
            });
        }
    }

    var scrollToTop = function() {
        $location.hash('content');
        $anchorScroll();
    }

    $scope.viewDetail = viewDetail;
    $scope.deleteKelahiran = deleteKelahiran;
    $scope.goToEditKelahiran = goToEditKelahiran;
    $scope.scrollToTop = scrollToTop;

    getAllKelahiran();
});
