'use strict';

/**
 * @ngdoc directive
 * @name stocksApp.directive:ckEditor
 * @description
 * # ckEditor
 */
angular.module('App')
  .directive('ckEditor', function () {
      return {
        require: '?ngModel',
        link: function ($scope, elm, attr, ngModel) {

          var ck = CKEDITOR.replace(elm[0]);

          ck.on('pasteState', function () {
            $scope.$apply(function () {
              ngModel.$setViewValue(ck.getData());
            });
          });

          ngModel.$render = function (value) {
            ck.setData(ngModel.$modelValue);
          };
        }
      };
  });
