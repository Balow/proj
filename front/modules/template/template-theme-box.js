(function() {
    'use strict';

    var dependencies = ['core','templateIndicator'];

    angular.module('templateThemeBox', dependencies)
    	.config(configFn)
    	.run(runFn)
        .directive('templateThemeBox', ['CONFIG',templateThemeBoxDirective])
        .controller('TemplateThemeBoxCtrl', ['$scope', 'ItemManager', TemplateThemeBoxCtrl])


    function TemplateThemeBoxCtrl($scope, ItemManager)
    {
        $scope.indicatorCollection = [];
        console.log('TemplateThemeBoxCtrl : controller');
        ItemManager.getDataItem('themeBox').then(function(data){
            $scope.themeBoxCollection = data;
        });
    }

    function templateThemeBoxDirective(CONFIG) {
        return {
            restrict: 'E',
            controller:'TemplateThemeBoxCtrl',
            scope:true,
            templateUrl: CONFIG.basePath + 'template/template-theme-box.html'
        };
    }

    function runFn() {
    	console.log('Run : templateThemeBox');
    }

    function configFn() {
		//console.log('Config : core');
    }


})();
