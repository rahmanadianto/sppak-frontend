var controller = app.controller('LoginCtrl', function(PenggunaService, $rootScope, $scope, $http, $state) {
	$rootScope.$broadcast('pageTitle', 'Login');

    var doLogin = function doLogin(email, password) {
        PenggunaService.doLogin(email, password).then(function(data) {
            var userType = data.userable_type.replace('Morph', '');
            if (userType === 'Penduduk') {
                $state.go('penduduk');
            } else if (userType === 'InstansiKesehatan') {
                $state.go('instansiKesehatan');
            } else if (userType === 'Kelurahan') {
                $state.go('kelurahan');
            } else if (userType === 'Pegawai') {
                $state.go('pegawai');
            }
        })
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Email atau password salah.");
			}
		});
    };

    $scope.email = '';
    $scope.password = '';

    $scope.doLogin = doLogin;
});
