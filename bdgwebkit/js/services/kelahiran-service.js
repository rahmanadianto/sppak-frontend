app.factory('KelahiranService', function($http, $q) {
    var factory = {};
    var kelahiranEndpoint = 'http://localhost:8000/api/v1/kelahiran/';

    var getEndpoint = function(kelahiranId) {
        return kelahiranEndpoint + kelahiranId;
    }

    factory.getAllKelahiran = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: kelahiranEndpoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    factory.addKelahiran = function(dat) {
        var deferred = $q.defer();

        var req = {
            anak: dat.anak,
            kartuKeluargaId: dat.kartuKeluargaId,
            aktaNikah: dat.aktaNikahId,
            ibu: dat.ibuId,
            ayah: dat.ayahId,
            saksi1: dat.saksiSatu,
            saksi2: dat.saksiDua,
            pemohonId: dat.pemohonId,
            waktuCetak : dat.waktuCetakTerakhir

        };
        console.log("ULALALAL");
        console.log(req);

        //kode_ruangan, kapasitas, status_kondisi
        $http({
            method: 'POST',
            url: kelahiranEndpoint,
            data: req,
            dataType: 'json',
            beforeSend: function(xhr){
                var auth = localStorage.getItem('ls.auth');
                console.log(localStorage);
                xhr.setRequestHeader('Authorization', auth.substring(1,auth.length - 1));
            }
            
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };

    factory.editKelahiran = function(kelahiranId, dat) {
        var deferred = $q.defer();

        var req = {
            anak: dat.anak,
            kartuKeluargaId: dat.kartuKeluarga,
            aktaNikah: dat.aktaNikah,
            ibu: dat.ibu,
            ayah: dat.ayah,
            saksi1: dat.saksi1,
            saksi2: dat.saksi2,
            pemohonId: dat.pemohonId,
            waktuCetak : dat.waktuCetak

        };

        $http({
            method: 'PATCH',
            url: getEndpoint(kelahiranId),
            data: req,
            headers: {'content-type': 'application/json'}
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    factory.deleteKelahiran = function(kelahiranId) {
        var deferred = $q.defer();

        $http({
            method: 'DELETE',
            url: getEndpoint(kelahiranId),
            headers: {'content-type': 'application/json'}
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    return factory;
});