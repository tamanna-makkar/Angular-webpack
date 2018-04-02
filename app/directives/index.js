'use strict';

var angular = require('angular');


angular.module('dashboard').directive('simpleDirective', require('./dashboard.directive'));
angular.module('dashboard').directive('notepaddDirective', require('./notepad.directive'));