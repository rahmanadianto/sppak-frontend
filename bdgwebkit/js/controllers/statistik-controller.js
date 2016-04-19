app.controller('StatistikCtrl', function($http, $rootScope, $scope, $state, KelahiranService, StatistikService) {
	$rootScope.$broadcast('pageTitle', 'Statistik');

	$scope.statistikOptions = {
		filter: {
			selected: 'frekuensiKelahiran',
			availableOptions: [
				{ name: 'Frekuensi Kelahiran', value: 'frekuensiKelahiran' },
				{ name: 'Crude Birth Rate', value: 'crudeBirthRate' },
				{ name: 'Status Permohonan', value: 'statusPermohonan' }
			]
		}
	};

	$scope.statistik = {
		labels: [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F"
		],
		data: [
			[
				1,
				2,
				2,
				1,
				6,
				3
			]
		]
	};
	
	$scope.getStatistik = function(jenis){
		StatistikService.getStatistik(jenis).then(function(res){
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
		});
	}

});

