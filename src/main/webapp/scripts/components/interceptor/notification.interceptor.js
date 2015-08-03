 'use strict';

angular.module('saveupApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-saveupApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-saveupApp-params')});
                }
                return response;
            },
        };
    });