app.factory('PendudukService', function($http, $q) {
    var factory = {};
    var pendudukEndpoint = 'http://localhost:8000/api/v1/penduduk/';


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

    return factory;
});