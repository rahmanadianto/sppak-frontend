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
            data.data.map(function(d) {
                d.anak.waktuLahir = (new Date(d.anak.waktuLahir));
                d.anak.anakKe = Number(d.anak.anakKe);
                d.anak.berat = Number(d.anak.berat);
                d.anak.panjang = Number(d.anak.panjang);
                d.anak.kotaLahirId = Number(d.anak.kotaLahirId);
            });
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    };


    factory.getKelahiran = function(id) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: getEndpoint(id)
        }).success(function(response) {
            response.data.anak.waktuLahir = (new Date(response.data.anak.waktuLahir));
            response.data.anak.anakKe = Number(response.data.anak.anakKe);
            response.data.anak.berat = Number(response.data.anak.berat);
            response.data.anak.panjang = Number(response.data.anak.panjang);
            response.data.anak.kotaLahirId = Number(response.data.anak.kotaLahirId);
            
            deferred.resolve(response);
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
            ibuId: dat.ibuId,
            ayahId: dat.ayahId,
            saksiSatu: dat.saksiSatu,
            saksiDua: dat.saksiDua,
            pemohonId: dat.pemohonId,
            waktuCetakTerakhir : dat.waktuCetakTerakhir,
            instansiKesehatanId :dat.instansiKesehatanId
        };

        //kode_ruangan, kapasitas, status_kondisi
        $http({
            method: 'POST',
            url: kelahiranEndpoint,
            data: req,
            dataType: 'json'
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
            kartuKeluargaId: dat.kartuKeluargaId,
            aktaNikah: dat.aktaNikahId,
            ibuId: dat.ibuId,
            ayahId: dat.ayahId,
            saksiSatu: dat.saksiSatu,
            saksiDua: dat.saksiDua,
            pemohonId: dat.pemohonId,
            waktuCetakTerakhir : dat.waktuCetakTerakhir,
            instansiKesehatanId :dat.instansiKesehatanId
        };

        $http({
            method: 'PATCH',
            url: getEndpoint(kelahiranId),
            data: req,
            dataType: 'json'
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
            url: getEndpoint(kelahiranId)
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    return factory;
});
