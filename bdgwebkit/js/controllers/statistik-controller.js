app.controller('StatistikCtrl', function($http, $rootScope, $interval, $scope, $state, KelahiranService, StatistikService) {
	$rootScope.$broadcast('pageTitle', 'Statistik');

	var d = new Date();
	var d2 = new Date();
	d2.setMonth(d2.getMonth() - 12);

	var d3 = new Date();
	d3.setDate(d3.getDate() - 31);
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
		frekuensiKelahiran: {
			startDate: d2,
			endDate: d,
			unitWaktu: 'month'
		},
		crudeBirthRate: {
			startYear: d.getFullYear() - 25,
			endYear: d.getFullYear()
		},
		statusPermohonan: {
			startDate: d3,
			endDate: d,
			unitWaktu: 'day'
			// startDate: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
			// endDate: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
		},
		unitWaktu: [
			{ name: 'Hari', value: 'day' },
			{ name: 'Bulan', value: 'month' },
			{ name: 'Tahun', value: 'year' }
		]
	};

	$scope.statistik = {
		labels: [],
		series: [],
		data: [[]]
	};

	var formatDate = function(dateString) {
		return dateString.getFullYear() + '-' + (dateString.getMonth() + 1) + '-' + dateString.getDate();
	}

	var getStatistikCBR = function(settings) {
		if (!settings) settings = $scope.settings.crudeBirthRate;

		StatistikService.getStatistik('crudeBirthRate', {startYear: settings.startYear, endYear: settings.endYear})
		.then(function(res) {
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
			$scope.statistik.series = res.series;
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	var getStatistikFrekuensiKelahiran = function(settings) {
		if (!settings) settings = $scope.settings.frekuensiKelahiran;

		var params = {startDate: formatDate(settings.startDate), endDate: formatDate(settings.endDate), timeUnit: settings.unitWaktu};
		StatistikService.getStatistik('frekuensiKelahiran', params)
		.then(function(res) {
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
			$scope.statistik.series = res.series;
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	var getStatistikStatusPermohonan = function(settings) {
		if (!settings) settings = $scope.settings.statusPermohonan;

		var params = {startDate: formatDate(settings.startDate), endDate: formatDate(settings.endDate), timeUnit: settings.unitWaktu};
		StatistikService.getStatistik('statusPermohonan', params)
		.then(function(res) {
			$scope.statistik.data = res.data;
			$scope.statistik.labels = res.labels;
			$scope.statistik.series = res.series;
		})
		.catch(function(err) {
			if (err) {
				alert(err.message);
			} else {
				alert("Terjadi error pada server. Mohon maaf.");
			}
		});
	}

	var getStatistik = function(jenis, settings){
		if (!jenis) jenis = $scope.settings.filter.selected;

		switch (jenis) {
			case 'crudeBirthRate': getStatistikCBR(); break;
			case 'frekuensiKelahiran': getStatistikFrekuensiKelahiran(); break;
			case 'statusPermohonan': getStatistikStatusPermohonan(); break;
		}
	}

	getStatistik($scope.settings.filter.selected);

	$scope.getStatistik = getStatistik;
});
