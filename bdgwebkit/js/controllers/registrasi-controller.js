app.controller('RegistrasiCtrl', function($scope, $state, $rootScope, PendudukService) {

	$scope.pengguna = {
		"email": null,
		"password": null,
		"userable_id": null,
		"userable_type": null,
		"name": null
	};

	$scope.registrasiPenduduk = function(pengguna) {
		if (pengguna.userable_id == null) {
			alert("Isi nomor KTP anda");
		} else if (pengguna.email == null) {
			alert("Isi e-mail anda");
		} else if (pengguna.password == null){
			alert("Isi password anda");
		} else if(pengguna.password.length < 6 ) {
			alert("Panjang password harus lebih dari 6 karakter");
		} else if (pengguna.name == null) {
			alert("Isi nama anda sesuai yang tertera di KTP anda");
		} else {
			PendudukService.registrasiPenduduk(pengguna)
			.then(function(res) {
				$state.go('login');
			})
			.catch(function(err) {
				if (err) {
					alert(err.message);
				} else {
					alert("Terjadi error pada server. Mohon maaf.");
				}
			});
		}

	};
});
