app.factory('ProvinsiService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://localhost:8000/api/v1/provinsi/';

    factory.getAllProvinsi = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: kelahiranEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    return factory;
});
