app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
        url: '/',
        templateUrl: '/login-page.html',
        controller: 'LoginCtrl'
    })
    .state('register', {
        url: '/register',
        templateUrl: '/register.html',
        controller: 'RegistrasiCtrl'
    })
    .state('pegawai', {
        url: '/pegawai',
        templateUrl: '/template/pegawai/home.html',
        controller: 'PegawaiCtrl'
    })
    .state('pegawai.statistik', {
        url: '/statistik',
        templateUrl: '/template/pegawai/statistik.html',
        controller: 'StatistikCtrl'
    })
    .state('instansiKesehatan', {
        url: '/instansi-kesehatan',
        templateUrl: '/template/instansi-kesehatan/home.html',
        controller: 'InstansiKesehatanCtrl'
    })
    .state('kelurahan', {
        url: '/kelurahan',
        templateUrl: '/template/kelurahan/home.html',
        controller: 'KelurahanCtrl'
    })
    .state('penduduk', {
        url: '/penduduk',
        templateUrl: '/template/penduduk/home.html',
        controller: 'PendudukCtrl'
    })
    .state('penduduk.permohonan', {
        url: '/permohonan',
        templateUrl: '/template/penduduk/form-permohonan.html',
        controller: 'PendudukPermohonanCtrl'
    })
    .state('penduduk.permohonan.update', {
        url: '/:id',
        templateUrl: '/template/penduduk/form-permohonan-update.html',
        controller: 'PendudukPermohonanUpdateCtrl'
    })
});

//admin_detail.html
//form_permohonan.html
//histori_anak.html
//kelurahan-page
//rumah-sakit-page
//register
//login-page
