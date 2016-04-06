app.factory('PendudukService', function($http, $q) {
    var factory = {};
    var pendudukEndpoint = 'http://localhost:8000/api/v1/penduduk/';
    var penggunaEndpoint = 'http://localhost:8000/api/v1/pengguna/';


    factory.getAllPenduduk = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: pendudukEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    factory.registrasiPenduduk = function(dat) {
        var deferred = $q.defer();

        var req = {
            email: dat.email,
            password: dat.password,
            userable_id: dat.userable_id,
            userable_type: dat.userable_type
        };

        $http({
            method: 'POST',
            data: req,
            url: penggunaEndpointgit,
            dataType: 'json'
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return factory;
});