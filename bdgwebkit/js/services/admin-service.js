app.factory('AdminService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://localhost:8000/api/v1/kelahiran/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
    }

    factory.verifikasiAdmin = function(kelahiranId) {
        var deferred = $q.defer();

        var req = {verifikasiAdmin: 1};

        $http({
            method: 'PATCH',
            url: getEndpoint(kelahiranId),
            data: req,
						withCredentials: true,
						beforeSend: function(xhr){
							var auth = localStorage.getItem('ls.auth');
							xhr.setRequestHeader('Authorization', auth.substring(1,auth.length - 1));
						}
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    return factory;
});

