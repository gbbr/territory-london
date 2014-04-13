
var App = angular.module("TerritoryLondon", [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ngTouch'
]);

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'templates/HomeView.html',
            controller: 'Controllers.Home',
            reloadOnSearch: false
        })

        .when('/about', {
            templateUrl: 'templates/AboutView.html',
            controller: 'Controllers.About'
        })

        .otherwise({ redirectTo: '/home'});

    $locationProvider.html5Mode(true);

}]);


// TODO: Image center/stretch

App.factory('Services.DataSource', ['$http', DataSourceService]);

App.directive('carousel', ['$interval', CarouselDirective]);
App.directive('animateOut', ['$animate', AnimateOutDirective]);

App.controller('Controllers.Home', ['$scope', 'Services.DataSource', '$location', HomeController]);
App.controller('Controllers.About', ['$scope', 'Services.DataSource', AboutController]);