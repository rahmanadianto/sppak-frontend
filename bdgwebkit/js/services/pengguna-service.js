app.factory('PenggunaService', function($q, $http) {
    var factory = {};
    var penggunaEndpoint = 'http://localhost:8000/api/v1/pengguna/';

    factory.doLogin = function(email, password) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: penggunaEndpoint + 'login',
            headers: {
                'Authorization': 'Basic ' + btoa(email + ':' + password)
            }
        }).success(function(response) {
            $http.defaults.headers.common.Authorization = 'Basic ' + btoa(email + ':' + password);
            localStorage.setItem('auth', $http.defaults.headers.common.Authorization);
            localStorage.setItem('authData', JSON.stringify(response.data));

            deferred.resolve(response.data);
        }).error(function(response) {
            deferred.reject(response.data);
        });

        return deferred.promise;
    }

    return factory;
});
