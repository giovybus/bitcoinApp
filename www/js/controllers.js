angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.home = function() {
    $scope.modal.show();
  };

})

.controller('homeCtr', function($scope, $http){

    $http.get('data/settings.html').
            success(function(){
                $scope.fileExist = true;
                $scope.settings = "";
            }).
            error(function(){
                $scope.fileExist = false;
                $scope.settings = "settings not found, please enter in settings page and follow the steps!";
            })

        /*$scope.settings = "settings not found, please enter in settings page and follow the steps!";
        $scope.fileExist = false;*/
})

.controller('detailsCtr', function($scope, $http){

        var testCorrency = "post/testCorrency.html";
        var testPool = "post/testPool.html";

        var corrency = 'post/proxy-corrency.php';
        var pool = 'post/proxy-pool.php';
    $http.get(testCorrency).
        success(function(data){
            console.log("success controller details corrency" + data);
            $scope.currency = data;
        }).
        error(function(){
            console.log("error controller details corrency");
            $scope.currency = [];
        }
    );

    $http.get(testPool).
        success(function(data){
            console.log("success controller details pool")
            $scope.pool = data;
        }).
        error(function(){
            console.log("error controller details pool");
            $scope.pool = [];
        }
    );

})

.controller('settingsCtr', function($scope, $http){
        $http.get('data/settings.html').
            success(function(data){
                console.log('file letto correttamente');
                //$scope.data = data;
                $scope.token = data.token;
            }).
            error(function(){
                console.log('file non letto');
                $scope.token = "no data";

            })

        $scope.save = function(token){
            console.log('salvo ' + token);

           /*$cordovaFile.write('data/settings.html').
                success(function(){console.log('file scritto')}).
                error(function(){console.log('file non scritto')})*/
        }
});

/**
 * funzione addetta alla lettura
 * dei settaggi
 * @param $http
 * @param $scope
 */
function leggi($scope, $http){
   /* $scope.fileExist = false;

    $http.get('data/settings.html').
        success(function(data){
            console.log('file letto correttamente');
            $scope.data = data;
            $scope.settings = "";
            $scope.fileExist = true;
        }).
        error(function(){
            console.log('file non letto');
            $scope.settings = "settings not found, please enter in settings page and follow the steps!";
            $scope.fileExist = false;
        })*/
}