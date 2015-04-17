'use strict';

/**
 * @ngdoc function
 * @name App.controller:SettingspaneCtrl
 * @description
 * # SettingspaneCtrl
 * Controller of the App
 */
App.controller('main-controller', function ($scope) {

        $scope.$on('toggleSettingsPane', function(event, args) {
            $layout.layoutSettings.settingsPane.isOpen = !$layout.layoutSettings.sidebar.isOpen;

            var toggle = $layout.layoutSettings.sidebar.isOpen;
            console.log(toggle);
            toggle ? $scope.collapsed = "collapsed" : $scope.collapsed = "";

            console.log(true);
        });

        $scope.$on('mobileMenuToggle', function(event, args) {
            $layout.layoutSettings.sidebar.isOpen = !$layout.layoutSettings.sidebar.isOpen;

            var toggle = $layout.layoutSettings.mobileMenuSidebar.isOpen;
            console.log(toggle);
            toggle ? $scope.collapsed = "collapsed" : $scope.collapsed = "";

            console.log(false);
        });

  });
