var controller = app.controller('AuthController',
    [
        'authService', // the authentication service
        '$rootScope',  // (optional) if you want to receive auth events
        '$scope',
        'authDefaults',
        function(authService, $rootScope, $scope, authDefaults) {
            authDefaults.authenticateUrl = 'http://localhost:8000/api/v1/pengguna/login';
            // define the endpoints that will be authenticated
            authService.addEndpoint(); // the current hostname
            authService.addEndpoint('http://localhost:8000/api/v1/pengguna/login');

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
