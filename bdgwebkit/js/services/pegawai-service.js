app.factory('PegawaiService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://www.sppak.dev/kelahiran/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
    }

    factory.verifikasiAdmin = function(kelahiranId) {
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

    return factory;
});