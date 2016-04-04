app.factory('KelurahanService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://www.sppak.dev/kelahiran/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
    }

    factory.verifikasiLurah = function(kelahiranId, dat) {
        var deferred = $q.defer();

        var req = {verifikasiLurah: 1};

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