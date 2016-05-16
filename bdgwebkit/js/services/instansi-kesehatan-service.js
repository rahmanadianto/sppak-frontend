app.factory('InstansiKesehatanService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://sppak.beti.ga/api/v1/kelahiran/';
    var instansiKesehatanEndpoint = 'http://sppak.beti.ga/api/v1/instansiKesehatan/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
    }

    factory.getAllInstansiKesehatan = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: instansiKesehatanEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    factory.verifikasi = function(kelahiranId) {
        var deferred = $q.defer();

        var req = {verifikasiInstansiKesehatan: 1};

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
