(function() {
    'use strict';

    var dependencies = ['core','ngRoute','ui','contactLogin','templateThemeBox'];

    angular.module('main', dependencies)
        .config(['$compileProvider','CONFIG',configFn])
    	.config(['$routeProvider','CONFIG',configRoute])
    	.run(['$rootScope',runFn])
        
    function configRoute($routeProvider,CONFIG){

        $routeProvider.when('/home', {
            template: '<contact-login></contact-login>',
        }).when('/dashboard', {
            templateUrl: CONFIG.basePath + 'main/dashboard.html',
        }).otherwise({ 
            redirectTo: '/home' 
        });

    }

    function runFn($rootScope) {
    	//console.log('Run : main');
    }

    function configFn($compileProvider,CONFIG) {
		//console.log('Config : main');
        //console.log($compileProvider);
        $compileProvider.debugInfoEnabled(CONFIG.debug);
    }


})();
