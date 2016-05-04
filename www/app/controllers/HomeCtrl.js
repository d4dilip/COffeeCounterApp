
(function() {
    angular
        .module('CoffeeCounterApp')
        .controller('HomeCtrl', HomeCtrl);
    HomeCtrl.$inject = ['$scope', 'AppConstants', '$http', '$localstorage', '$ionicLoading'];

    function HomeCtrl($scope, AppConstants, $http, $localstorage, $ionicLoading) {
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
            console.log("calling  StoreCoffecups");
            var data = $localstorage.getObject("COFFEECOUNTDATA");
            var coffeeecount = $scope.coffeecups.count;

            var coffeeitem = new Object();
            coffeeitem.NumberOfCoffee = coffeeecount;
            coffeeitem.Timestamp = new Date();

            data.push(coffeeitem);
            coffeeecount = Number(coffeeecount) - 1;


            $localstorage.setObject("COFFEECOUNTDATA", data);
            
            $ionicLoading.show({ template: 'Enjoy your coffee !!!', noBackdrop: true, duration: 2000 });
            $scope.coffeecups.count=1;
            //data = $localstorage.getObject("COFFEECOUNTDATA");
            //alert(data.length);
        }


        function OpenExtLink(url) {
            window.open(url, "_system", "location=yes");
        }
    }
})();
