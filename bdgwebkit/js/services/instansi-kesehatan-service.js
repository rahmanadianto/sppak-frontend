app.factory('InstansiKesehatanService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://localhost:8000/api/v1/kelahiran/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
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
