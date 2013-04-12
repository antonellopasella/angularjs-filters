angular.module('ngFilters', []).filter('capitalize', function () {
    "use strict";
    return function (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});
