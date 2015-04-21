'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:PageLoginCtrl
 * @description
 * # PageLoginCtrl
 * Controller of the stocksApp
 */

App.controller('login-page-controller', ['$scope', 'Auth', function ($scope, Auth) {
    // Fixme these variables
    $scope.auth = Auth;
    $scope.forgetForm = true;
    $scope.login = false;

    // Put the focus in the username
    document.getElementById("username").focus();


    /**
     * Forgoten password
     */
    $scope.stateLogin = true;
    $scope.animateBox = "";
    $scope.toggleLogin = function () {
        $scope.stateLogin = $scope.stateLogin === false ? true : false;
        if ($scope.stateLogin){
            document.getElementById("username").focus();
            $scope.animateBox = "";
        }
        else{
            document.getElementById("loginmail").focus();
            $scope.animateBox = "tada";
        }

    }

    /**
     * Add alert
     */
    $scope.alerts = [
        //{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];
    $scope.addAlert = function () {
        $scope.alerts.push({msg: 'Another alert!'});
    };
    /**
     * Close alert
     * @param index
     */
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };


}])
