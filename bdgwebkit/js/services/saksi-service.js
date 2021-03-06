app.factory('SaksiService', function($http, $q) {
    var factory = {};
    var saksiEndpoint = 'http://sppak.beti.ga/api/v1/saksi/';
    
    var getEndpoint = function(saksiId, token){
		return saksiEndpoint + saksiId + '/verifikasi/' + decodeURIComponent(token);
	}
	
    factory.verifikasi = function(saksiId, token){
		var deferred = $q.defer();
		
		
        $http({
            method: 'GET',
            url: getEndpoint(saksiId, token),
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;	
	}
	
	
	
    return factory;
});

