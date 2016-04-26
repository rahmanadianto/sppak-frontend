app.controller('StatistikCtrl', function($http, $rootScope, $scope, $state, KelahiranService, StatistikService) {
	$rootScope.$broadcast('pageTitle', 'Statistik');

	var d = new Date();
	$scope.settings = {
		filter: {
			selected: 'crudeBirthRate',
			selectedTitle: 'Crude Birth Rate',
			options: [
				{ name: 'Frekuensi Kelahiran', value: 'frekuensiKelahiran' },
				{ name: 'Crude Birth Rate', value: 'crudeBirthRate' },
				{ name: 'Status Permohonan', value: 'statusPermohonan' }
			]
		},
		crudeBirthRate: {
			startYear: d.getFullYear() - 25,
			endYear: d.getFullYear()
		}
	};

	$scope.statistik = {
		labels: [],
		series: [],
		data: [[]]
	};

	var getStatistikCBR = function(settings) {
		if (!settings) settings = $scope.settings.crudeBirthRate;

		StatistikService.getStatistik('crudeBirthRate', {startYear: settings.startYear, endYear: settings.endYear})
		.then(function(res) {
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
		}) ;
	}

	var getStatistik = function(jenis, settings){
		if (!jenis) jenis = $scope.settings.filter.selected;

		switch (jenis) {
			case 'crudeBirthRate': getStatistikCBR(); break;
		}
	}

	getStatistik($scope.settings.filter.selected);

	$scope.getStatistik = getStatistik;
});
