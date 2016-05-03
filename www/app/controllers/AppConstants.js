//App constants
(function () {
    angular
        .module('CoffeeCounterApp')
        .factory('AppConstants', AppConstants);

    function AppConstants() {
        return {
            AppSettingsUrl: 'app/data/appsettings.json',
            MyNewsDataUrl: 'app/data/mynewsdata.json'
            
        };

    }


})();