'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app
    .controller('DashboardCtrl', function($scope, $http) {
        $scope.page = {
            title: 'Dashboard',
            subtitle: 'Your customizable dashboard.'
        };
    });
