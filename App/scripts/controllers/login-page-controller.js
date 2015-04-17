'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:PageLoginCtrl
 * @description
 * # PageLoginCtrl
 * Controller of the stocksApp
 */

App.controller('login-page-controller',['$scope', 'Auth', function($scope, Auth)
{
    $scope.auth = Auth;

    $scope.forgetForm = true;

    $scope.login = false;

    $scope.forgetPassword = function(){
        console.log("hola")
    }
    //
    //// hide error messages until 'submit' event
    //$scope.submitted = false;
    //// hide success message
    //$scope.showMessage = false;
    //// method called from shakeThat directive
    //$scope.submit = function() {
    //    // show success message
    //    $scope.showMessage = true;
    //};



}])