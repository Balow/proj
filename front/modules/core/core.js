(function() {
    'use strict';

    var dependencies = ['core.user', 'core.item'];

    angular.module('core', dependencies)
    	.config(configFn)
    	.run(runFn)
        .constant('CONFIG', Object.freeze({
            basePath : 'modules/',
            debug : true
        }))


    function runFn() {
    	//console.log('Run : core');
    }

    function configFn() {
		//console.log('Config : core');
    }


})();
