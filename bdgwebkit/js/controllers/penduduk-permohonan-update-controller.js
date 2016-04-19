app.controller('PendudukPermohonanUpdateCtrl', function($http, $rootScope, $scope, $state, $stateParams, KotaService, KelahiranService, InstansiKesehatanService) {
    $rootScope.$broadcast('pageTitle', 'Ubah Permohonan');

    var init = function() {
        if (typeof $stateParams.id !== 'undefined' && $stateParams.id !== null) {
            $scope.$parent.getKelahiran($stateParams.id);
        }
    }

    init();

    $scope.editKelahiran = $scope.$parent.editKelahiran;
});
