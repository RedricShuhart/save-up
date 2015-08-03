'use strict';

angular.module('saveupApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


