app.controller('SaksiCtrl', function($anchorScroll, $location, $http, $rootScope, $scope, $state, SaksiService, KelahiranService) {
    $rootScope.$broadcast('pageTitle', 'Verifikasi Saksi');
    $scope.kelahiran = {};
    $scope.success = false;
    
    var getKelahiran = function(id) {
        KelahiranService.getKelahiran(id).then(function(response) {
            $scope.kelahiran = response.data;
        })
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
    }
    
    var getId = function() {
		var id = getUrlParameter('pid');
		return id;
	}
	
	// Taken from http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html with modification
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.href.split('?')[1];
		var sURLVariables = sPageURL.split('&');
		var sParameterName;
		var i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	}
	
    var scrollToTop = function() {
        $location.hash('content');
        $anchorScroll();
    }
    
    var verifikasi = function(){
		var sPageURL = window.location.href;
		console.log(sPageURL);
		var token = getUrlParameter('token');
		var saksiId = getUrlParameter('id');
		SaksiService.verifikasi(saksiId, token)
		.then(function(res) {
			$scope.success = true;
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}
	
	$scope.getKelahiran = getKelahiran(getId());
	$scope.scrollToTop = scrollToTop;
	$scope.verifikasi = verifikasi;
});

