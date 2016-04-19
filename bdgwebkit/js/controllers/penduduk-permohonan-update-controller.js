app.controller('PendudukPermohonanUpdateCtrl', function($http, $rootScope, $scope, $state, $stateParams, KotaService, KelahiranService, InstansiKesehatanService) {
    $rootScope.$broadcast('pageTitle', 'Ubah Permohonan');

    var getKelahiran = function(id) {
        KelahiranService.getKelahiran(id).then(function(res) {
            $scope.$parent.permohonan = res.data;
            console.log($scope.$parent.permohonan);
        });
    }

    var editKelahiran = function(permohonan) {
        KelahiranService.editKelahiran(permohonan.id, permohonan).then(
            function(res) {
                $state.go('penduduk');
            }
        );
    }

    var init = function() {
        if (typeof $stateParams.id !== 'undefined' && $stateParams.id !== null) {
            getKelahiran($stateParams.id);
        }
    }

    init();

    $scope.editKelahiran = editKelahiran;
});