'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minovateApp
 */
app
    .controller('MainCtrl', function($scope, $http, $timeout, $translate) {

        $scope.main = {
            title: 'Minovate',
            settings: {
                navbarHeaderColor: 'scheme-default',
                sidebarColor: 'scheme-default',
                brandingColor: 'scheme-default',
                activeColor: 'default-scheme-color',
                headerFixed: true,
                asideFixed: true,
                rightbarShow: false
            }
        };

        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
            $scope.currentLanguage = langKey;
        };

        $scope.currentLanguage = $translate.proposedLanguage() || $translate.use();

        var vm = this;

        vm.widgetConfig = {
            group: 'widget',
            animation: 150,
            handle: '.grabber',
            ghostClass: 'widget-ghost',
            sort: false,
            onStart: function(evt) {
                vm.adding = true;
            },
            onEnd: function(evt) {
                vm.adding = false;
            }
        };

        vm.widgetsConfig = {
            group: 'widget',
            animation: 150,
            handle: '.grabber',
            ghostClass: 'widget-ghost',
            onStart: function(evt) {
                vm.dragging = true;
            },
            onEnd: function(evt) {
                vm.dragging = false;
            },
            onAdd: function(evt) {
                vm.added = evt.model.id;
                $timeout(function() {
                    vm.adding = false;
                    vm.added = false;
                    $scope.$apply();
                }, 500);
            }
        };

        vm.added = false;
        vm.activeWidgets = [];
        vm.widgets = [{
            id: 1,
            name: 'Billing Linechart',
            controller: 'BillingController as b',
            template: 'billing.overview.html'
        }, {
            id: 2,
            name: 'Billing Donut Chart',
            controller: 'BillingController as b',
            template: 'billing.detail.html'
        }, {
            id: 3,
            name: 'Billing List',
            controller: 'BillingController as b',
            template: 'billing.list.html'
        }, {
            id: 4,
            name: 'Customer',
            controller: 'CustomersController as c',
            template: 'customers.overview.html'
        }, {
            id: 5,
            name: 'Customers',
            controller: 'CustomersController as c',
            template: 'customers.detail.html'
        }, {
            id: 6,
            name: 'Customer List',
            controller: 'CustomersController as c',
            template: 'customers.list.html'
        }];

        vm.findWidget = {};
        for (var i = 0, len = vm.widgets.length; i < len; i++) {
            vm.findWidget[vm.widgets[i].id] = vm.widgets[i];
        }

        vm.findWidgets = function(id) {
            return _.where(vm.widgets, {
                id: id
            });
        };

        vm.hasWidget = function(id) {
            return _.where(vm.activeWidgets, {
                id: id
            }).length > 0;
        };

        vm.toggleWidget = function(id) {
            var i = _.findIndex(vm.activeWidgets, {
                id: id
            });
            if (i > -1) {
                vm.activeWidgets.splice(i, 1);
            } else {
                var w = _.findWhere(vm.widgets, {
                    id: id
                });
                vm.activeWidgets.push(w);
            }
        };
    });
