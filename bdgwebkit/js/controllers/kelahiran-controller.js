app.controller('PermohonanCtrl', function($scope, $rootScope, KelahiranService, authService, authDefaults) {
    $scope.permohonan={
        "anak": {
            "nama": null,
            "jenisKelamin": null,
            "kotaLahirId": null,
            "waktuLahir": null,
            "jenisLahir": null,
            "anakKe": null,
            "penolongKelahiran": null,
            "berat": null,
            "panjang": null
        },
        "kartuKeluargaId": null,
        "aktaNikahId": null,
        "ibuId": null,
        "ayahId": null,
        "instansiKesehatanId": null,
        "saksiSatu": {
            "pendudukId": null,
            "email": null
        },
        "saksiDua": {
            "pendudukId": null,
            "email": null
        },
        "pemohonId": null,
        "waktuCetakTerakhir": null
    }
    
    var getPermohonan = function() {
        KelahiranService.getAllKelahiran().then(function(res) {
            $scope.permohonan = res.data;
            var id = localStorage.getItem('id');
						$scope.permohonan.pemohonId = id;
						console.log($scope.permohonan);						
        });
    };
    getPermohonan();

    $scope.addKelahiran = function(permohonan) {
        console.log(permohonan);
        console.log(KelahiranService);
        KelahiranService.addKelahiran(permohonan).then(
            function(res) {
                // $scope.error.onAddingLesson = '';
                console.log(res);
            }
            
        );
    };

    $scope.deleteKelahiran = function(permohonanId) {
        if (confirm("Apakah Anda benar-benar ingin menghapus permohonan ini?")) {
            KelahiranService.deleteKelahiran(permohonanId).then(
                function(res) {
                    window.location.replace('/histori_anak.html');
                },
                function(res) {

                }
            );
        }
    };

    //$scope.addClass = function(kelahiranId, dat) {
        //KelahiranService.editKelahiran(kelahiran, dat).then(
            //function(res) {
            //},
            //function(res) {
            //}
        //);
    //};

    // $scope.saveLesson = function(lesson) {
    //     LessonService.editLesson(lesson).then(
    //         function(res) {
    //             $scope.error.onModifyingLesson = '';
    //             hideModal('#modal-modify-lesson-' + lesson.id);

    //             getAllLessons();
    //         },
    //         function(res) {
    //             $scope.error.onModifyingLesson = res.message;
    //         }
    //     );
    // };

    // $scope.deleteLesson = function(lessonId) {
    //     if (confirm("Apakah Anda benar-benar ingin menghapus mata kuliah ini?")) {
    //         LessonService.deleteLesson(lessonId).then(
    //             function(res) {
    //                 $scope.error.onModifyingLesson = '';
    //                 hideModal('#modal-modify-lesson-' + lessonId);

    //                 getAllLessons();
    //             },
    //             function(res) {
    //                 $scope.error.onModifyingLesson = res.message;
    //             }
    //         );
    //     }
    // };

    // $scope.addClass = function(cls) {
    //     ClassService.addClass(cls.lessonId, cls).then(
    //         function(res) {
    //             $scope.error.onAddingClass = '';
    //             hideModal('#modal-add-class-' + cls.lessonId);

    //             getAllLessons();
    //         },
    //         function(res) {
    //             $scope.error.onAddingClass = res.message;
    //         }
    //     );
    // };

    // $scope.saveClass = function(cls) {
    //     ClassService.editClass(cls.kuliah_id, cls).then(
    //         function(res) {
    //             $scope.error.onModifyingClass = '';
    //             hideModal('#modal-modify-class-' + cls.kuliah_id + '-' + cls.id);

    //             getAllLessons();
    //         },
    //         function(res) {
    //             $scope.error.onModifyingClass = res.message;
    //         }
    //     );
    // };

    // $scope.deleteClass = function(lessonId, classId) {
    //     if (confirm("Apakah Anda benar-benar ingin menghapus kelas K" + classId + "?")) {
    //         ClassService.deleteClass(lessonId, classId).then(
    //             function(res) {
    //                 $scope.error.onModifyingClass = '';
    //                 hideModal('#modal-modify-class-' + lessonId + '-' + classId);

    //                 getAllLessons();
    //             },
    //             function(res) {
    //                 $scope.error.onModifyingClass = res.message;
    //             }
    //         );
    //     }
    // };
});

