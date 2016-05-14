app.factory('SaksiService', function($http, $q) {
    var factory = {};
    var saksiEndpoint = 'http://localhost:8000/api/v1/saksi/';
    
    var getEndpoint = function(saksiId, token){
		return saksiEndpoint + saksiId + '/verifikasi/' + decodeURIComponent(token);
	}
	
    factory.verifikasi = function(saksiId, token){
		var deferred = $q.defer();
		var endpoint = getEndpoint(saksiId, token);
		console.log(endpoint);
		
        $http({
            method: 'GET',
            url: endpoint,
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;	
	}
	
	
	
    return factory;
});

