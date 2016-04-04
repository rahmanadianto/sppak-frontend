app
.controller('AdminCtrl', function($scope, authService, authDefaults) {
	$scope.response = [];
	$scope.viewedDetail = {};
    
    $scope.viewDetail = function(permohonan) {
		$scope.viewedDetail = permohonan;
	}
	
	$(document).ready(function() {
		$('#tabel-permohonan tbody').on('click', 'tr', function() {
			var data = $('#tabel-permohonan').DataTable().row(this).data();
			angular.element('body').scope().viewDetail(data);
			angular.element('body').scope().$apply();
		});
	});

});
