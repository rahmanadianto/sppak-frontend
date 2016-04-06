var controller = app.controller('AuthController',
    [
        'authService', // the authentication service
        '$rootScope',  // (optional) if you want to receive auth events
        '$scope',
        'authDefaults',
        '$http',
        function(authService, $rootScope, $scope, authDefaults, $http) {
            authDefaults.authenticateUrl = 'http://localhost:8000/api/v1/pengguna/login';
            // define the endpoints that will be authenticated
            authService.addEndpoint(); // the current hostname
            authService.addEndpoint('http://localhost:8000/api/v1/pengguna/login');
            authService.addEndpoint('http://localhost:8000/api/v1/kelahiran');

            // listen for login events
            $rootScope.$on('login', function() {
                $scope.loggedInUsername = authService.username();
            });

            // listen for logout events
            $rootScope.$on('logout', function() {
                $scope.loggedInUsername = null;
            });

            // method to log-in
            $scope.onLoginButton = function () {
                // pass input username and password to
                // the service for authentication
                authService
                .login($scope.username, $scope.password)
                .success(function() {
									// handle login success
									 $http({
											method: 'GET',
											url: 'http://localhost:8000/api/v1/pengguna/login'
										}).then(function successCallback(res){
												localStorage.setItem("id", res.data.data.id);
                        var usr_type = res.data.data.userable_type;
                        localStorage.setItem("user_type", usr_type);
                        if (usr_type.indexOf("Pegawai") > -1) {
                          window.location.replace("/admin_detail.html");
                        }
                        else if (usr_type.indexOf("InstansiKesehatan") > -1) {
                          window.location.replace("/rumah-sakit-page.html");
                        }
                        else if (usr_type.indexOf("Kelurahan") > -1) {
                          window.location.replace("/kelurahan-page.html");
                        }
                        else if (usr_type.indexOf("Penduduk") > -1) {
                          window.location.replace("/form_permohonan.html");
                        }
										});

                })
                .error(function() {
                    // handle login error
                    alert("Your username/password invalid");
                });
            };

            // method to log out
            $scope.onLogoutButton = function () {
                // simply call the logout button
                authService.logout();
            };
        }
    ]);
