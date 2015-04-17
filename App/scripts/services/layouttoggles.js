'use strict';

/**
 * @ngdoc service
 * @name App.layoutToggles
 * @description
 * # layoutToggles
 * Factory in the App.
 */
angular.module('App',[])
    .factory('$layoutToggles', function ($rootScope, $layout) {
    // Service logic  Private functions

    // Public API here
    return {
        initToggles: function () {
            return function () {
                // Sidebar Toggle
                $rootScope.sidebarToggle = function () {
                    $layout.setOptions('sidebar.isCollapsed', ! $rootScope.layoutOptions.sidebar.isCollapsed);
                };
            }
        }
    }
});


    //        //initToggles: function () {
    //        //    return function () {
    //        //        // Sidebar Toggle
    //        //        $rootScope.sidebarToggle = function () {
    //        //            alert("was made a click");
    //        //            //$layout.setOptions('sidebar.isCollapsed', ! $rootScope.layoutOptions.sidebar.isCollapsed);
    //        //        };
    //        //
    //        //        //
    //        //        //// Settings Pane
    //        //        //$rootScope.settingsPaneToggle = function()
    //        //        //{
    //        //        //  var use_animation = $rootScope.layoutOptions.settingsPane.useAnimation && ! isxs();
    //        //        //
    //        //        //  var scroll = {
    //        //        //    top: jQuery(document).scrollTop(),
    //        //        //    toTop: 0
    //        //        //  };
    //        //        //
    //        //        //  if(public_vars.$body.hasClass('settings-pane-open'))
    //        //        //  {
    //        //        //    scroll.toTop = scroll.top;
    //        //        //  }
    //        //        //
    //        //        //  TweenMax.to(scroll, (use_animation ? .1 : 0), {top: scroll.toTop, roundProps: ['top'], ease: scroll.toTop < 10 ? null : Sine.easeOut, onUpdate: function()
    //        //        //  {
    //        //        //    jQuery(window).scrollTop( scroll.top );
    //        //        //  },
    //        //        //    onComplete: function()
    //        //        //    {
    //        //        //      if(use_animation)
    //        //        //      {
    //        //        //        // With Animation
    //        //        //        public_vars.$settingsPaneIn.addClass('with-animation');
    //        //        //
    //        //        //        // Opening
    //        //        //        if( ! public_vars.$settingsPane.is(':visible'))
    //        //        //        {
    //        //        //          public_vars.$body.addClass('settings-pane-open');
    //        //        //
    //        //        //          var height = public_vars.$settingsPane.outerHeight(true);
    //        //        //
    //        //        //          public_vars.$settingsPane.css({
    //        //        //            height: 0
    //        //        //          });
    //        //        //
    //        //        //          TweenMax.to(public_vars.$settingsPane, .25, {css: {height: height}, ease: Circ.easeInOut, onComplete: function()
    //        //        //          {
    //        //        //            public_vars.$settingsPane.css({height: ''});
    //        //        //          }});
    //        //        //
    //        //        //          public_vars.$settingsPaneIn.addClass('visible');
    //        //        //        }
    //        //        //        // Closing
    //        //        //        else
    //        //        //        {
    //        //        //          public_vars.$settingsPaneIn.addClass('closing');
    //        //        //
    //        //        //          TweenMax.to(public_vars.$settingsPane, .25, {css: {height: 0}, delay: .15, ease: Power1.easeInOut, onComplete: function()
    //        //        //          {
    //        //        //            public_vars.$body.removeClass('settings-pane-open');
    //        //        //            public_vars.$settingsPane.css({height: ''});
    //        //        //            public_vars.$settingsPaneIn.removeClass('closing visible');
    //        //        //          }});
    //        //        //        }
    //        //        //      }
    //        //        //      else
    //        //        //      {
    //        //        //        // Without Animation
    //        //        //        public_vars.$body.toggleClass('settings-pane-open');
    //        //        //        public_vars.$settingsPaneIn.removeClass('visible');
    //        //        //        public_vars.$settingsPaneIn.removeClass('with-animation');
    //        //        //
    //        //        //        $layout.setOptions('settingsPane.isOpen', ! $rootScope.layoutOptions.settingsPane.isOpen);
    //        //        //      }
    //        //        //    }
    //        //        //  });
    //        //        //};
    //        //        //
    //        //        //
    //        //        //// Chat Toggle
    //        //        //$rootScope.chatToggle = function()
    //        //        //{
    //        //        //  $layout.setOptions('chat.isOpen', ! $rootScope.layoutOptions.chat.isOpen);
    //        //        //};
    //        //        //
    //        //        //
    //        //        //// Mobile Menu Toggle
    //        //        //$rootScope.mobileMenuToggle = function()
    //        //        //{
    //        //        //  $layout.setOptions('sidebar.isMenuOpenMobile', ! $rootScope.layoutOptions.sidebar.isMenuOpenMobile);
    //        //        //  $layout.setOptions('horizontalMenu.isMenuOpenMobile', ! $rootScope.layoutOptions.horizontalMenu.isMenuOpenMobile);
    //        //        //};
    //        //        //
    //        //        //
    //        //        //// Mobile User Info Navbar Toggle
    //        //        //$rootScope.mobileUserInfoToggle = function()
    //        //        //{
    //        //        //  $layout.setOptions('userInfoNavVisible', ! $rootScope.layoutOptions.userInfoNavVisible);
    //        //        //}
    //        //    };
    //        //}
    //    };
    //});
