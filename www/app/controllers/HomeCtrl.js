
(function() {
    angular
        .module('CoffeeCounterApp')
        .controller('HomeCtrl', HomeCtrl);
    HomeCtrl.$inject = ['$scope', 'AppConstants', '$http', '$localstorage'];

    function HomeCtrl($scope, AppConstants, $http, $localstorage) {
        var vm = this;
        $scope.OpenExtLink = OpenExtLink;
        $scope.$watch('coffeecups.count', function() {

        });
        $scope.AddCoffeeCup = function() {

            $scope.coffeecups.count = Number($scope.coffeecups.count) + 1;
        };
        $scope.ReduceCoffeeCup = function() {
            $scope.coffeecups.count = Number($scope.coffeecups.count) - 1;
        };


        $scope.StoreCoffecups = function() {
            debugger;
            var data = $localstorage.getObject("COFFEECOUNTDATA");
            var coffeeecount = $scope.coffeecups.count;
      
             var coffeeitem =new Object();
            coffeeitem.NumberOfCoffee = coffeeecount;
            coffeeitem.Timestamp = new Date();

            data.push(coffeeitem);
            coffeeecount=number(coffeeecount)-1;
      
           
            $localstorage.setObject("COFFEECOUNTDATA", data);
            //data = $localstorage.getObject("COFFEECOUNTDATA");
            //alert(data.length);
        }

        function OpenExtLink(url) {
            window.open(url, "_system", "location=yes");
        }
    }
})();
