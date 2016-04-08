app.controller('MainCtrl', function($http, $rootScope, $scope, $state, KelahiranService, PegawaiService) {
	if (localStorage.getItem('auth')) {
		$http.defaults.headers.common.Authorization = localStorage.getItem('auth');
	} else {
		$state.go('login');
	}

	$scope.pageTitle = 'SPPAK';
	$scope.init = function () {
	  $rootScope.$on('pageTitle', function (event, val) {
		if (val) {
			$scope.pageTitle = val + ' | SPPAK';
		} else {
			$scope.pageTitle = 'SPPAK';
		}
	  });
	};

	$scope.init();
});
