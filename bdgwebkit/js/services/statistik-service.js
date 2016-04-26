app.factory('StatistikService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://localhost:8000/api/v1/statistik/';

    var getEndpoint = function(jenis) {
        return kelahiranEndpoint + jenis;
    }

    factory.getStatistik = function(jenis, params) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            params: params,
            url: getEndpoint(jenis)
        }).success(function(data) {
            if (data.labels.length === 0) data.labels.push('NO DATA');
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return factory;
});
