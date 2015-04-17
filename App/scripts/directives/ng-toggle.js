'use strict';

/**
 * @ngdoc directive
 * @name App.directive:ngToggle
 * @description
 * # ngToggle
 */
angular.module('App')
    .directive('myToggle', function ($rootScope) {
        /**
         * USE
         * <div my-toggle type="sidebar">Content of the directive</div>
         */
        return {
            link: function (scope, element) {
                // type = element.attr('type');

                element.bind('click', function () {
                    $rootScope.$broadcast('toggleSidebar');
                    console.log('Toggle: ' + element.attr('type'));

                });
            }
        };
    });
