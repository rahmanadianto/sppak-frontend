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
                d.id = Number(d.id);
                d.anakId = Number(d.anakId);
                d.kelurahanId = Number(d.kelurahanId);
                d.instansiKesehatanId = Number(d.instansiKesehatanId);
                d.kartuKeluargaId = Number(d.kartuKeluargaId);
                d.saksiSatuId = Number(d.saksiSatuId);
                d.saksiDuaId = Number(d.saksiDuaId);
                d.status = Number(d.status);
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
            response.data.id = Number(response.data.id);
            response.data.anakId = Number(response.data.anakId);
            response.data.kelurahanId = Number(response.data.kelurahanId);
            response.data.instansiKesehatanId = Number(response.data.instansiKesehatanId);
            response.data.kartuKeluargaId = Number(response.data.kartuKeluargaId);
            response.data.saksiSatuId = Number(response.data.saksiSatuId);
            response.data.saksiDuaId = Number(response.data.saksiDuaId);
            response.data.status = Number(response.data.status);

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
            aktaNikahId: dat.aktaNikahId,
            ibuId: dat.ibuId,
            ayahId: dat.ayahId,
            pemohonId: dat.pemohonId,
            status: dat.status,
            waktuCetakTerakhir : dat.waktuCetakTerakhir,
            instansiKesehatanId :dat.instansiKesehatanId
        };

        if (dat.saksiSatu.pendudukId !== null) {
            req.saksiSatu = dat.saksiSatu;
        }

        if (dat.saksiDua.pendudukId !== null) {
            req.saksiDua = dat.saksiDua;
        }

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
            aktaNikahId: dat.aktaNikahId,
            ibuId: dat.ibuId,
            ayahId: dat.ayahId,
            pemohonId: dat.pemohonId,
            status: dat.status,
            waktuCetakTerakhir : dat.waktuCetakTerakhir,
            instansiKesehatanId :dat.instansiKesehatanId
        };

        if (dat.saksiSatu.pendudukId !== null) {
            req.saksiSatu = dat.saksiSatu;
        }

        if (dat.saksiDua.pendudukId !== null) {
            req.saksiDua = dat.saksiDua;
        }

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
