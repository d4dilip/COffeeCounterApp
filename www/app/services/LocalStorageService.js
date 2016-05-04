(function() {
    angular.module('CoffeeCounterApp')
        .factory('$localstorage', ['$window', function($window) {
            return {
                set: function(key, value) {
                    $window.localStorage[key] = value;
                },
                get: function(key, defaultValue) {
                    return $window.localStorage[key] || defaultValue;
                },
                setObject: function(key, value) {
                    $window.localStorage[key] = JSON.stringify(value);
                },
                getObject: function(key) {
                    if ($window.localStorage.getItem(key) === null || $window.localStorage.getItem(key)==='undefined') {
                        this.set(key, '[]');
                    }
                    return JSON.parse($window.localStorage[key] || '[]');
                }
            }
        }]);
})();