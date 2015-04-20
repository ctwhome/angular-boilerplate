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


    $scope.flip ="";
        $scope.changeFlip = function(){
            if ($scope.flip == "")
                $scope.flip = "flip";
            else
                $scope.flip = "";
        };


      $scope.alerts = [
            //{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];


    /**
     * Add alert
     */
        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Another alert!'});
        };
    /**
     * Close alert
     * @param index
     */
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


}])
