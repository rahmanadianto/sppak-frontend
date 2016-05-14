app.factory('PendudukService', function($http, $q) {
    var factory = {};
    var pendudukEndpoint = 'http://sppak.nitho.me/api/v1/penduduk/';
    var penggunaEndpoint = 'http://sppak.nitho.me/api/v1/pengguna/';


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

    factory.getPenduduk = function(id) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: pendudukEndpoint + id
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
            userable_type: dat.userable_type,
            name: dat.name
        };

        $http({
            method: 'POST',
            data: req,
            url: penggunaEndpoint,
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
