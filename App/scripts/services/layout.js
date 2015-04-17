'use strict';

/**
 * @ngdoc service
 * @name App.layout
 * @description
 * # layout
 * Factory in the App.
 */
angular.module('App')
    .factory('$layout', function () {
        // Service logic
        // ... var meaningOfLife = 42;

        // Public API here
        return {
            layoutSettings : {
                sidebar: {
                    isOpen: false
                },
                mobileMenuSidebar: {
                    isOpen: false
                },
                settingsPane: {
                    isOpen: false
                }
            },


            propsToLocalStorage: [
                'horizontalMenu.isVisible',
                'horizontalMenu.isFixed',
                'horizontalMenu.minimal',
                'horizontalMenu.clickToExpand',

                'sidebar.isVisible',
                'sidebar.isCollapsed',
                'sidebar.toggleOthers',
                'sidebar.isFixed',
                'sidebar.isRight',
                'sidebar.userProfile',

                'chat.isOpen',

                'container.isBoxed',

                'skins.sidebarMenu',
                'skins.horizontalMenu',
                'skins.userInfoNavbar'
            ],

                setOptions: function (options, the_value) {
                if (typeof options == 'string' && typeof the_value != 'undefined') {
                    options = this.pathToObject(options, the_value);
                }

                //jQuery.extend(true, $rootScope.layoutOptions, options);

                this.LocalStorage();
            },

            saveLocalStorage: function () {
                // do something
            },

            LocalStorage: function () {
                // Do something
            },

            loadOptionsFromLocalStorage: function () {
                // Load options from local Storage
            }
        }
    });
