'use strict';

var home = angular.module('myApp.home', ['ui.bootstrap', 'ngRoute'])

var carousel = angular.module('myApp.home.carousel', []);
carousel.controller('CarouselCtrl', CarouselCtrl);

function CarouselCtrl($scope, $http){
    $http.get('app/data/items_top.json')
        .then(function(response_top) {
            $scope.items_top = response_top.data;
        }, function(response) {
            $scope.items_top = "Somethig went wrong";
        });
    $http.get('app/data/items_bottom.json')
        .then(function(response_bottom) {
            $scope.items_bottom = response_bottom.data;
        }, function(response) {
            $scope.items_bottom = "Somethig went wrong";
        });
    $scope.myInterval = 3000;
};

/*home.controller('popoverCtrl', function($scope) {
  $scope.showPopover = function() {
    $scope.popoverIsVisible = true;
  };

  $scope.hidePopover = function() {
    $scope.popoverIsVisible = false;
  };
});*/

/*
home.controller('ItemsCtrl', function($scope, $http) {
    $http.get('app/data/items_top.json')
        .then(function(response) {
            $scope.items = response.data;
        }, function (response) {
            $scope.items = "Somethig went wrong";
        });
});
*/

home.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/home.html',
    controller: ''
  });
}])
