'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
var App = angular.module('App', [
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider)
{
    $stateProvider
        //// available for anybody
        .state('public',{
            url : '/public',
            template : '<div>public</div>',
        })


        // the log-on screen
        .state('login',{
            url : '/login',
            templateUrl: 'views/login-page-template.html',
            controller: 'login-page-controller'
        })

        // just for authenticated
        .state('app',{
            abstract: true,
            //url : '/app',
            // This is the main view
            templateUrl: 'views/main/main-template.html',
           // controller: 'main-controller',

            //this property will apply to all children of 'app'
            data : {requireLogin : false }
        })

        .state('app.dashboard',{
            url : '/dashboard',
            views:{
                "":{
                templateUrl: 'views/dashboard-template.html',
                controller: 'dashboard-controller'
                }
            }
        })

        .state('app.library',{
            url : '/library',
            views:{
                "":{
                    templateUrl: 'views/library-template.html',
                    controller: 'library-controller'
                }
            }
        })

        .state('app.users-admin',{
            url : '/users-admin',
            views:{
                "":{
                    templateUrl: 'views/users-admin-template.html',
                    controller: 'users-admin-controller'
                }
            }
        })

        .state('app.system-settings',{
            url : '/system-settings',
            views:{
                "":{
                    templateUrl: 'views/system-settings-template.html',
                    controller: 'system-settings-controller'
                }
            }
        })

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/dashboard");
})
    .factory('Auth',function() { return { isLoggedIn : false}; })
    .directive('shakeThat', ['$animate', function($animate) {

        return {
            require: '^form',
            scope: {
                submit: '&',
                submitted: '='
            },
            link: function(scope, element, attrs, form) {
                // listen on submit event
                element.on('submit', function() {
                    // tell angular to update scope
                    scope.$apply(function() {
                        // everything ok -> call submit fn from controller
                        if (form.$valid) return scope.submit();
                        // show error messages on submit
                        scope.submitted = true;
                        // shake that form
                        $animate.addClass(element, 'shake', function() {
                            $animate.removeClass(element, 'shake');
                        });
                    });
                });
            }
        };

    }]);



App.run(function ($rootScope, $state, $location, Auth) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

        var shouldLogin = toState.data !== undefined
            && toState.data.requireLogin
            && !Auth.isLoggedIn ;

        // NOT authenticated - wants any private stuff
        if(shouldLogin)
        {
            $state.go('login');
            event.preventDefault();
            return;
        }


        // authenticated (previously) comming not to root main
        if(Auth.isLoggedIn)
        {
            var shouldGoToMain = fromState.name === ""
                && toState.name !== "main" ;

            if (shouldGoToMain)
            {
                $state.go('main');
                event.preventDefault();
            }
            return;
        }

        // UNauthenticated (previously) comming not to root public
        var shouldGoToPublic = fromState.name === ""
            && toState.name !== "public"
            && toState.name !== "login" ;

        if(shouldGoToPublic)
        {
            $state.go('public');console.log('p')
            event.preventDefault();
        }
        // unmanaged
    });
});





