'use strict';

var angular = require('angular');

angular.module('dashboard').filter('dashboardFilterss',require('./dashboard.filters'));
angular.module('dashboard').filter('startsWith', require('./startsWith'));