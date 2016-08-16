(function() {
    'use strict';

    var dependencies = ['core'];

    angular.module('contactLogin', dependencies)
        .config(configFn)
        .run(runFn)
        .directive('contactLogin', ['CONFIG', contactLoginDirective])
        .directive('contactLoginAlert', ['CONFIG',contactLoginAlertDirective])
        .controller('LoginCtrl', ['$scope', 'UserManager', LoginCtrl])


    function LoginCtrl($scope, UserManager) {
        $scope.user = {};
        $scope.level = "primary"
        $scope.icon = "user"
        $scope.label = "Connect"

        $scope.connect = function() {
            if (UserManager.connect($scope.user)) {
                 $scope.message = "Welcome User test"
            } else {
                $scope.message = "Error : User Unknown test"
            }
        }

    }

    function contactLoginDirective(CONFIG) {
        return {
            restrict: 'E',
            controller:'LoginCtrl',
            scope:true,
            templateUrl: CONFIG.basePath + 'contact-login/contact-login.html'
        };
    }

    function contactLoginAlertDirective(CONFIG) {
        return {
            restrict: 'E',
            templateUrl: CONFIG.basePath + 'contact-login/contact-login-alert.html'
        };
    }


    function runFn() {
        //console.log('Run : contactLogin');
    }

    function configFn() {
        //console.log('Config : contactLogin');
    }


})();
