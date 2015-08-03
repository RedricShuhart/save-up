'use strict';

angular.module('saveupApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
