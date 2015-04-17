'use strict';

/**
 * @ngdoc function
 * @name App.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the App
 */
App.controller('users-admin-controller', function ($scope, $rootScope) {
        $scope.sidebarToggle = function () {
            $rootScope.$broadcast('toggleSidebar', 'holaa');
        }
    });