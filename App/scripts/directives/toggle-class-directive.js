'use strict';

/**
 * @ngdoc directive
 * @name App.directive:ngToggle
 * @description
 * # ngToggle
 *
 * USE with
 * <button id="btn" toggle-class="active">Change Class</button>
 * <div toggle-class="whatever"></div>
 */
angular.module('App')
    .directive('toggleClass', function () {
        /**
         * USE
         * <div my-toggle type="sidebar">Content of the directive</div>
         */
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    element.toggleClass(attrs.toggleClass);
                });
            }
        };
    });


