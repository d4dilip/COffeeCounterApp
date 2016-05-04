//CoffeeCounterApp routes
CoffeeCounterApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider, $provide) {

    $httpProvider.interceptors.push(function($rootScope) {
        return {
            request: function(config) {
                $rootScope.$broadcast('loading:show')
                return config
            },
            response: function(response) {
                $rootScope.$broadcast('loading:hide')
                return response
            }
        }
    });

    $ionicConfigProvider.views.maxCache(0);
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });

    $stateProvider

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.trends', {
            url: '/trends',
            views: {
                'menuContent': {
                    templateUrl: 'templates/trends.html',
                    controller: 'TrendsCtrl'
                }
            }
        })
        .state('app.logs', {
            url: '/logs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/logs.html',
                    controller: 'TrendsCtrl'
                }
            }
        })
        .state('app.info', {
            url: '/info',
            views: {
                'menuContent': {
                    templateUrl: 'templates/info.html'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});