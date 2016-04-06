app.controller('registrasiCtrl', function($scope, $rootScope, PendudukService) {

	$scope.pengguna = {
		"email": null,
		"password": null,
		"userable_id": null,
		"userable_type": null
	}

	$scope.registrasiPenduduk = function(pengguna) {
		if (pengguna.userable_id == null) {
			alert("Isi nomor KTP anda");
		} else if (pengguna.email == null) {
			alert("Isi e-mail anda");
		} else if (pengguna.password == null){
			alert("Isi password anda");
		} else if(pengguna.password.length < 6 ) {
			alert("Panjang password harus lebih dari 6 karakter");
		} else {
			PendudukService.registrasiPenduduk(pengguna).then(
			function(res) {
				window.location.replace("/login-page.html");
			});
		}

	};
});
