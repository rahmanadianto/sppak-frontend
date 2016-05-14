app.controller('MainCtrl', function($http, $location, $anchorScroll, $rootScope, $scope, $state, KelahiranService, PegawaiService) {
	if (localStorage.getItem('auth')) {
		$http.defaults.headers.common.Authorization = localStorage.getItem('auth');
	} else {
		$state.go('login');
	}


	var logout = function() {
	    localStorage.clear();
	    $http.defaults.headers.common.Authorization = undefined;
	    $state.go('login');
	}

	$scope.pageTitleEmbedded = 'SPPAK';
	$scope.pageTitle = 'SPPAK';
	$scope.init = function () {
	  $rootScope.$on('pageTitle', function (event, val) {
		if (val) {
			$scope.pageTitle = val;
			$scope.pageTitleEmbedded = val + ' | SPPAK';
		} else {
			$scope.pageTitle = 'SPPAK';
			$scope.pageTitleEmbedded = 'SPPAK';
		}
	  });
	};
		
    var scrollToTop = function() {
        $location.hash('content');
        $anchorScroll();
    }

    $scope.scrollToTop = scrollToTop;
	$scope.init();
	$scope.logout = logout;
});
