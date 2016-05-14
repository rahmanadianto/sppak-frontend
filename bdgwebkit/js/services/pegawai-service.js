app.factory('PegawaiService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://sppak.nitho.me/api/v1/kelahiran/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
    }

    factory.verifikasi = function(kelahiranId) {
        var deferred = $q.defer();

        var req = {verifikasiAdmin: 1};

        $http({
            method: 'PATCH',
            url: getEndpoint(kelahiranId),
            data: req
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    factory.tolak = function(kelahiranId) {
        var deferred = $q.defer();

        var req = {status: 3, verifikasiAdmin: 0};

        $http({
            method: 'PATCH',
            url: getEndpoint(kelahiranId),
            data: req
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return factory;
});
