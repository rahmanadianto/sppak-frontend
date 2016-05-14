app.controller('SaksiCtrl', function($anchorScroll, $location, $http, $rootScope, $scope, $state, SaksiService, KelahiranService) {
    $rootScope.$broadcast('pageTitle', 'Verifikasi Saksi');
    $scope.kelahiran = {};
    $scope.success = false;
    
    var getKelahiran = function(id) {
        KelahiranService.getKelahiran(id).then(function(response) {
            $scope.kelahiran = response.data;
        })
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
    }
    
    var getId = function() {
		return SaksiService.getId();
	}
	
    var scrollToTop = function() {
        $location.hash('content');
        $anchorScroll();
    }
	
	$scope.getKelahiran = getKelahiran(getId());
	$scope.scrollToTop = scrollToTop;
});

