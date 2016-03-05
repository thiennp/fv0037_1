'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:ngDynamicController
 * @description
 * # ngDynamicController
 */
app
    .directive('ngDynamicController', function($compile, $parse) {
        return {
            restrict: 'A',
            terminal: true,
            priority: 100000,
            link: function(scope, elem) {
                var name = $parse(elem.attr('ng-dynamic-controller'))(scope);
                elem.removeAttr('ng-dynamic-controller');
                elem.attr('ng-controller', name);
                $compile(elem)(scope);
            }
        };
    });
