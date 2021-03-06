app.factory('KotaService', function($http, $q) {
    var factory = {};
    var endpoint = 'http://sppak.beti.ga/api/v1/kota/';

    factory.getAllKota = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: endpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    return factory;
});
