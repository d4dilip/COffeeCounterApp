// Coffee Counter App 
var CoffeeCounterApp = angular.module('CoffeeCounterApp', ['ionic'])
    .run(function($ionicPlatform, $rootScope, $ionicLoading, $http, AppConstants) {
        $ionicPlatform.ready(function() {

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({ template: 'Loading..' })
        })

        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide()
        })
    });

// phonegap app 
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {

    }


};

