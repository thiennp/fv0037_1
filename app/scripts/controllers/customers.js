'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the minovateApp
 */
app.controller('CustomersCtrl', function($scope) {

    $scope.page = {
        title: 'Customers',
        subtitle: 'Your customizable dashboard.'
    };

    var vm = this;

    vm.munnies = 3434;
});
