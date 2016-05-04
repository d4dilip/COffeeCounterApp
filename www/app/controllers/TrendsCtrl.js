// TrendsCtrl 
(function() {
    angular
        .module('CoffeeCounterApp')
        .controller('TrendsCtrl', TrendsCtrl);
    TrendsCtrl.$inject = ['$scope', 'AppConstants', '$http', '$localstorage'];

    function TrendsCtrl($scope, AppConstants, $http, $localstorage) {
        var vm = this;
        $scope.date = new Date();

        loadtrends();
        getAllCoffeeData();
        $scope.doRefresh = loadtrends;
        $scope.getAllCoffeeData = getAllCoffeeData;
        $scope.ClearLogs = ClearLogs;
        $scope.OpenExtLink = OpenExtLink;

        function OpenExtLink(url) {
            window.open(url, "_system", "location=yes");
        }

        function loadtrends() {

            var data = $localstorage.getObject("COFFEECOUNTDATA");

            $scope.TotalCoffeeCount = 0;
            $scope.TotalTodayCoffeeCount = 0;
            var inttodaytotal = 0;
            var inttotal = 0;
            data.forEach(function(element) {

                var inputDate = new Date(element.Timestamp);

                //Get today's date
                var todaysDate = new Date();
                //call setHours to take the time out of the comparison
                if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
                    inttodaytotal = Number(inttodaytotal) + Number(element.NumberOfCoffee);
                }
                inttotal = Number(inttotal) + Number(element.NumberOfCoffee);



            }, this);

            $scope.TotalCoffeeCount = inttodaytotal;
            $scope.TotalTodayCoffeeCount = inttotal;

            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');


        }
        function getAllCoffeeData() {
            var data = $localstorage.getObject("COFFEECOUNTDATA");
            $scope.AllCoffee = data;
            $scope.$broadcast('scroll.refreshComplete');
        }
        function ClearLogs() {

            localStorage.removeItem("COFFEECOUNTDATA");
            getAllCoffeeData();
            loadtrends();
        }


    }


})();
